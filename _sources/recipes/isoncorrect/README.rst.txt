:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'isoncorrect'
.. highlight: bash

isoncorrect
===========

.. conda:recipe:: isoncorrect
   :replaces_section_title:
   :noindex:

   De novo error\-correction of long\-read transcriptome reads.

   :homepage: https://github.com/ksahlin/isONcorrect
   :license: GPL / GPL-3.0-or-later
   :recipe: /`isoncorrect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isoncorrect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isoncorrect/meta.yaml>`_

   


.. conda:package:: isoncorrect

   |downloads_isoncorrect| |docker_isoncorrect|

   :versions:
      
      

      ``0.1.3.5-0``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-0``

      

   
   :depends on numpy: ``>=1.16.2``
   :depends on parasail-python: 
   :depends on python: ``>=3.4``
   :depends on python-edlib: ``>=1.1.2``

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

    pixi global install isoncorrect

to add into an existing workspace instead, run::

    pixi add isoncorrect

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install isoncorrect

Alternatively, to install into a new environment, run::

    conda create -n envname isoncorrect

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/isoncorrect:<tag>

(see `isoncorrect/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_isoncorrect| image:: https://img.shields.io/conda/dn/bioconda/isoncorrect.svg?style=flat
   :target: https://anaconda.org/bioconda/isoncorrect
   :alt:   (downloads)
.. |docker_isoncorrect| image:: https://quay.io/repository/biocontainers/isoncorrect/status
   :target: https://quay.io/repository/biocontainers/isoncorrect
.. _`isoncorrect/tags`: https://quay.io/repository/biocontainers/isoncorrect?tab=tags


.. raw:: html

    <script>
        var package = "isoncorrect";
        var versions = ["0.1.3.5","0.0.8","0.0.7","0.0.6","0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/isoncorrect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/isoncorrect/README.html