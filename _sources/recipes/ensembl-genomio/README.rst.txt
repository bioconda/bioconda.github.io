:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ensembl-genomio'
.. highlight: bash

ensembl-genomio
===============

.. conda:recipe:: ensembl-genomio
   :replaces_section_title:
   :noindex:

   Ensembl GenomIO \- tools to convert basic genomic data into Ensembl cores and back to flatfile

   :homepage: https://www.ensembl.org/
   :documentation: https://ensembl.github.io/ensembl-genomio/
   
   :developer docs: https://github.com/Ensembl/ensembl-genomio
   :license: APACHE / Apache-2.0
   :recipe: /`ensembl-genomio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ensembl-genomio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ensembl-genomio/meta.yaml>`_
   :links: biotools: :biotools:`Ensembl`

   


.. conda:package:: ensembl-genomio

   |downloads_ensembl-genomio| |docker_ensembl-genomio|

   :versions:
      
      

      ``1.6.2-0``,  ``1.6.1-0``

      

   
   :depends on bcbio-gff: ``0.7.1``
   :depends on biopython: ``>=1.81``
   :depends on ensembl-py: ``>=2.1.2``
   :depends on ensembl-utils: ``>=0.5.1``
   :depends on intervaltree: ``>=3.1.0``
   :depends on jsonschema: ``>=4.6.0``
   :depends on mysql-connector-python: ``>=8.0.29``
   :depends on python: ``>=3.10``
   :depends on python-redmine: ``>=2.3.0``
   :depends on requests: ``>=2.28.0``
   :depends on spython: ``>=0.3.13``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install ensembl-genomio

to add into an existing workspace instead, run::

    pixi add ensembl-genomio

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ensembl-genomio

Alternatively, to install into a new environment, run::

    conda create -n envname ensembl-genomio

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ensembl-genomio:<tag>

(see `ensembl-genomio/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ensembl-genomio| image:: https://img.shields.io/conda/dn/bioconda/ensembl-genomio.svg?style=flat
   :target: https://anaconda.org/bioconda/ensembl-genomio
   :alt:   (downloads)
.. |docker_ensembl-genomio| image:: https://quay.io/repository/biocontainers/ensembl-genomio/status
   :target: https://quay.io/repository/biocontainers/ensembl-genomio
.. _`ensembl-genomio/tags`: https://quay.io/repository/biocontainers/ensembl-genomio?tab=tags


.. raw:: html

    <script>
        var package = "ensembl-genomio";
        var versions = ["1.6.2","1.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ensembl-genomio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ensembl-genomio/README.html