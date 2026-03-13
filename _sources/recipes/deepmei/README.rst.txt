:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepmei'
.. highlight: bash

deepmei
=======

.. conda:recipe:: deepmei
   :replaces_section_title:
   :noindex:

   A tool to detect mobile elements insertion

   :homepage: https://github.com/Kanglu123/deepmei/tree/deepmei-v1.6.24
   :license: GPL3 / GPL-3.0-only
   :recipe: /`deepmei <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepmei>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepmei/meta.yaml>`_

   


.. conda:package:: deepmei

   |downloads_deepmei| |docker_deepmei|

   :versions:
      
      

      ``1.6.24-1``,  ``1.6.24-0``,  ``1.0.0-0``

      

   
   :depends on bedtools: ``2.30.0.*``
   :depends on bwa: ``0.7.17.*``
   :depends on perl: ``5.32.1.*``
   :depends on pysam: ``0.17.0.*``
   :depends on python: ``>=3.8,<=3.9``
   :depends on repeatmasker: ``4.1.2.p1.*``
   :depends on samtools: ``1.18.*``
   :depends on tensorflow: ``>=2.7.0,<=2.10.0``

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

    pixi global install deepmei

to add into an existing workspace instead, run::

    pixi add deepmei

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install deepmei

Alternatively, to install into a new environment, run::

    conda create -n envname deepmei

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/deepmei:<tag>

(see `deepmei/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_deepmei| image:: https://img.shields.io/conda/dn/bioconda/deepmei.svg?style=flat
   :target: https://anaconda.org/bioconda/deepmei
   :alt:   (downloads)
.. |docker_deepmei| image:: https://quay.io/repository/biocontainers/deepmei/status
   :target: https://quay.io/repository/biocontainers/deepmei
.. _`deepmei/tags`: https://quay.io/repository/biocontainers/deepmei?tab=tags


.. raw:: html

    <script>
        var package = "deepmei";
        var versions = ["1.6.24","1.6.24","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepmei/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepmei/README.html