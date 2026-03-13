:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qtip'
.. highlight: bash

qtip
====

.. conda:recipe:: qtip
   :replaces_section_title:
   :noindex:

   A tandem simulation approach for accurately predicting read alignment
   mapping qualities.


   :homepage: https://github.com/BenLangmead/qtip
   :license: MIT
   :recipe: /`qtip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qtip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qtip/meta.yaml>`_

   


.. conda:package:: qtip

   |downloads_qtip| |docker_qtip|

   :versions:
      
      

      ``1.6.2-2``,  ``1.6.2-1``,  ``1.6.2-0``

      

   
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3.6,<3.7.0a0``
   :depends on python_abi: ``3.6.* *_cp36m``
   :depends on scikit-learn: 

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

    pixi global install qtip

to add into an existing workspace instead, run::

    pixi add qtip

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install qtip

Alternatively, to install into a new environment, run::

    conda create -n envname qtip

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/qtip:<tag>

(see `qtip/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_qtip| image:: https://img.shields.io/conda/dn/bioconda/qtip.svg?style=flat
   :target: https://anaconda.org/bioconda/qtip
   :alt:   (downloads)
.. |docker_qtip| image:: https://quay.io/repository/biocontainers/qtip/status
   :target: https://quay.io/repository/biocontainers/qtip
.. _`qtip/tags`: https://quay.io/repository/biocontainers/qtip?tab=tags


.. raw:: html

    <script>
        var package = "qtip";
        var versions = ["1.6.2","1.6.2","1.6.2"];
    </script>





Notes
-----
For running qtip\, you will need to install any of the supported read mappers\,
\(e.g.\, bowtie2\)\, in the minimum required version. See homepage for details.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qtip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qtip/README.html