:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'airr'
.. highlight: bash

airr
====

.. conda:recipe:: airr
   :replaces_section_title:
   :noindex:

   AIRR Community Data Representation Standard reference library for antibody and TCR sequencing data. Citations\: AIRR standards \<doi\:10.5281\/zenodo.1185414\>.

   :homepage: http://docs.airr-community.org
   :license: CC / CC BY 4.0
   :recipe: /`airr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/airr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/airr/meta.yaml>`_

   


.. conda:package:: airr

   |downloads_airr| |docker_airr|

   :versions:
      
      

      ``1.6.1-0``,  ``1.5.1-1``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.1-0``,  ``1.3.1-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.1-0``

      

   
   :depends on pandas: ``>=0.18.0``
   :depends on python: 
   :depends on pyyaml: ``>=3.12``
   :depends on setuptools: ``<78``
   :depends on yamlordereddictloader: ``>=0.4.0``

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

    pixi global install airr

to add into an existing workspace instead, run::

    pixi add airr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install airr

Alternatively, to install into a new environment, run::

    conda create -n envname airr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/airr:<tag>

(see `airr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_airr| image:: https://img.shields.io/conda/dn/bioconda/airr.svg?style=flat
   :target: https://anaconda.org/bioconda/airr
   :alt:   (downloads)
.. |docker_airr| image:: https://quay.io/repository/biocontainers/airr/status
   :target: https://quay.io/repository/biocontainers/airr
.. _`airr/tags`: https://quay.io/repository/biocontainers/airr?tab=tags


.. raw:: html

    <script>
        var package = "airr";
        var versions = ["1.6.1","1.5.1","1.5.1","1.5.0","1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/airr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/airr/README.html