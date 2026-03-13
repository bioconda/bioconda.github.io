:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'multigps'
.. highlight: bash

multigps
========

.. conda:recipe:: multigps
   :replaces_section_title:
   :noindex:

   MultiGPS is a framework for analyzing collections of multi\-condition ChIP\-seq datasets and characterizing differential binding events between conditions.

   :homepage: http://mahonylab.org/software/multigps/
   :license: MIT
   :recipe: /`multigps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multigps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multigps/meta.yaml>`_

   


.. conda:package:: multigps

   |downloads_multigps| |docker_multigps|

   :versions:
      
      

      ``0.74-3``,  ``0.74-2``,  ``0.74-1``,  ``0.74-0``,  ``0.73-1``,  ``0.73-0``,  ``0.72-1``,  ``0.72-0``,  ``0.5-1``

      

   
   :depends on bioconductor-edger: 
   :depends on meme: ``>=4.11.2``
   :depends on openjdk: ``>=8``
   :depends on r-base: 

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

    pixi global install multigps

to add into an existing workspace instead, run::

    pixi add multigps

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install multigps

Alternatively, to install into a new environment, run::

    conda create -n envname multigps

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/multigps:<tag>

(see `multigps/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_multigps| image:: https://img.shields.io/conda/dn/bioconda/multigps.svg?style=flat
   :target: https://anaconda.org/bioconda/multigps
   :alt:   (downloads)
.. |docker_multigps| image:: https://quay.io/repository/biocontainers/multigps/status
   :target: https://quay.io/repository/biocontainers/multigps
.. _`multigps/tags`: https://quay.io/repository/biocontainers/multigps?tab=tags


.. raw:: html

    <script>
        var package = "multigps";
        var versions = ["0.74","0.74","0.74","0.74","0.73"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/multigps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/multigps/README.html