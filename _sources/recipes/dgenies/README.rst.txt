:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dgenies'
.. highlight: bash

dgenies
=======

.. conda:recipe:: dgenies
   :replaces_section_title:
   :noindex:

   Dotplot large Genomes in an Interactive\, Efficient and Simple way

   :homepage: http://dgenies.toulouse.inrae.fr
   :documentation: http://dgenies.toulouse.inrae.fr/
   
   :developer docs: https://github.com/genotoul-bioinfo/dgenies
   :license: GPL / GPL-3
   :recipe: /`dgenies <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dgenies>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dgenies/meta.yaml>`_

   


.. conda:package:: dgenies

   |downloads_dgenies| |docker_dgenies|

   :versions:
      
      

      ``1.5.0-1``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0.2-0``,  ``1.2.0.1-0``

      

   
   :depends on biopython: ``>=1.70``
   :depends on flask: ``2.*``
   :depends on intervaltree: ``3.*``
   :depends on jinja2: ``>=2.11.3``
   :depends on markdown: ``>=2.6``
   :depends on matplotlib-base: ``>=2.1``
   :depends on numpy: 
   :depends on psutil: ``>=5.6.6``
   :depends on python: ``>=3.6``
   :depends on python-crontab: ``>=2.2``
   :depends on pyyaml: ``>=5.4.1``
   :depends on requests: ``>=2.20.1``
   :depends on tendo: ``0.2.*``
   :depends on xopen: ``>=1.0``

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

    pixi global install dgenies

to add into an existing workspace instead, run::

    pixi add dgenies

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dgenies

Alternatively, to install into a new environment, run::

    conda create -n envname dgenies

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dgenies:<tag>

(see `dgenies/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dgenies| image:: https://img.shields.io/conda/dn/bioconda/dgenies.svg?style=flat
   :target: https://anaconda.org/bioconda/dgenies
   :alt:   (downloads)
.. |docker_dgenies| image:: https://quay.io/repository/biocontainers/dgenies/status
   :target: https://quay.io/repository/biocontainers/dgenies
.. _`dgenies/tags`: https://quay.io/repository/biocontainers/dgenies?tab=tags


.. raw:: html

    <script>
        var package = "dgenies";
        var versions = ["1.5.0","1.5.0","1.4.0","1.3.1","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dgenies/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dgenies/README.html