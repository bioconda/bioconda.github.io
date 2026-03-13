:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qiime-default-reference'
.. highlight: bash

qiime-default-reference
=======================

.. conda:recipe:: qiime-default-reference/0.1.3
   :replaces_section_title:
   :noindex:

   Default reference data files for use with QIIME.

   :homepage: http://www.qiime.org
   :license: CC BY-SA 3.0
   :recipe: /`qiime-default-reference <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qiime-default-reference>`_/`0.1.3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qiime-default-reference/0.1.3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qiime-default-reference/0.1.3/meta.yaml>`_

   


.. conda:package:: qiime-default-reference

   |downloads_qiime-default-reference| |docker_qiime-default-reference|

   :versions:
      
      

      ``0.1.3-1``,  ``0.1.3-0``

      

   
   :depends on python: 
   :depends on six: 

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

    pixi global install qiime-default-reference

to add into an existing workspace instead, run::

    pixi add qiime-default-reference

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install qiime-default-reference

Alternatively, to install into a new environment, run::

    conda create -n envname qiime-default-reference

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/qiime-default-reference:<tag>

(see `qiime-default-reference/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_qiime-default-reference| image:: https://img.shields.io/conda/dn/bioconda/qiime-default-reference.svg?style=flat
   :target: https://anaconda.org/bioconda/qiime-default-reference
   :alt:   (downloads)
.. |docker_qiime-default-reference| image:: https://quay.io/repository/biocontainers/qiime-default-reference/status
   :target: https://quay.io/repository/biocontainers/qiime-default-reference
.. _`qiime-default-reference/tags`: https://quay.io/repository/biocontainers/qiime-default-reference?tab=tags


.. raw:: html

    <script>
        var package = "qiime-default-reference";
        var versions = ["0.1.3","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qiime-default-reference/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qiime-default-reference/README.html