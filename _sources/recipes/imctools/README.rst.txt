:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'imctools'
.. highlight: bash

imctools
========

.. conda:recipe:: imctools
   :replaces_section_title:
   :noindex:

   An Image Mass Cytometry \(IMC\) file conversion tool that aims to convert IMC rawfiles \(.mcd\, .txt\) into an intermediary ome.tiff\, containing all the relevant metadata. Further it contains tools to generate simpler tiff files that can be directly be used as input files for e.g. CellProfiller\, Ilastik\, Fiji etc

   :homepage: https://github.com/BodenmillerGroup/imctools
   :documentation: https://github.com/BodenmillerGroup/imctools/blob/master/README.md
   
   :license: MIT
   :recipe: /`imctools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/imctools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/imctools/meta.yaml>`_

   


.. conda:package:: imctools

   |downloads_imctools| |docker_imctools|

   :versions:
      
      

      ``2.1.8-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.1-0``,  ``0.2-0``

      

   
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3.7``
   :depends on scikit-image: 
   :depends on scipy: 
   :depends on tifffile: ``>=0.13.5``

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

    pixi global install imctools

to add into an existing workspace instead, run::

    pixi add imctools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install imctools

Alternatively, to install into a new environment, run::

    conda create -n envname imctools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/imctools:<tag>

(see `imctools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_imctools| image:: https://img.shields.io/conda/dn/bioconda/imctools.svg?style=flat
   :target: https://anaconda.org/bioconda/imctools
   :alt:   (downloads)
.. |docker_imctools| image:: https://quay.io/repository/biocontainers/imctools/status
   :target: https://quay.io/repository/biocontainers/imctools
.. _`imctools/tags`: https://quay.io/repository/biocontainers/imctools?tab=tags


.. raw:: html

    <script>
        var package = "imctools";
        var versions = ["2.1.8","1.0.8","1.0.7","1.0.6","1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/imctools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/imctools/README.html