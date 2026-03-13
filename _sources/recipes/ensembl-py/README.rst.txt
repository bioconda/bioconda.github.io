:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ensembl-py'
.. highlight: bash

ensembl-py
==========

.. conda:recipe:: ensembl-py
   :replaces_section_title:
   :noindex:

   Ensembl Python base library

   :homepage: https://www.ensembl.org/
   :documentation: https://ensembl.github.io/ensembl-py/
   
   :developer docs: https://github.com/Ensembl/ensembl-py
   :license: APACHE / Apache-2.0
   :recipe: /`ensembl-py <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ensembl-py>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ensembl-py/meta.yaml>`_
   :links: biotools: :biotools:`Ensembl`

   


.. conda:package:: ensembl-py

   |downloads_ensembl-py| |docker_ensembl-py|

   :versions:
      
      

      ``3.0.1-0``,  ``3.0.0-0``,  ``2.1.3-0``

      

   
   :depends on python: ``>=3.10``
   :depends on sqlalchemy: ``>=1.4.45``

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

    pixi global install ensembl-py

to add into an existing workspace instead, run::

    pixi add ensembl-py

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ensembl-py

Alternatively, to install into a new environment, run::

    conda create -n envname ensembl-py

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ensembl-py:<tag>

(see `ensembl-py/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ensembl-py| image:: https://img.shields.io/conda/dn/bioconda/ensembl-py.svg?style=flat
   :target: https://anaconda.org/bioconda/ensembl-py
   :alt:   (downloads)
.. |docker_ensembl-py| image:: https://quay.io/repository/biocontainers/ensembl-py/status
   :target: https://quay.io/repository/biocontainers/ensembl-py
.. _`ensembl-py/tags`: https://quay.io/repository/biocontainers/ensembl-py?tab=tags


.. raw:: html

    <script>
        var package = "ensembl-py";
        var versions = ["3.0.1","3.0.0","2.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ensembl-py/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ensembl-py/README.html