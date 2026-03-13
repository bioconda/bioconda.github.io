:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'satsuma2'
.. highlight: bash

satsuma2
========

.. conda:recipe:: satsuma2
   :replaces_section_title:
   :noindex:

   FFT cross\-correlation based synteny aligner\, \(re\)designed to make full use of parallel computing

   :homepage: https://github.com/bioinfologics/satsuma2
   :license: GPL3
   :recipe: /`satsuma2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/satsuma2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/satsuma2/meta.yaml>`_

   


.. conda:package:: satsuma2

   |downloads_satsuma2| |docker_satsuma2|

   :versions:
      
      

      ``20161123-5``,  ``20161123-4``,  ``20161123-3``,  ``20161123-2``,  ``20161123-1``,  ``20161123-0``

      

   
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``

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

    pixi global install satsuma2

to add into an existing workspace instead, run::

    pixi add satsuma2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install satsuma2

Alternatively, to install into a new environment, run::

    conda create -n envname satsuma2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/satsuma2:<tag>

(see `satsuma2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_satsuma2| image:: https://img.shields.io/conda/dn/bioconda/satsuma2.svg?style=flat
   :target: https://anaconda.org/bioconda/satsuma2
   :alt:   (downloads)
.. |docker_satsuma2| image:: https://quay.io/repository/biocontainers/satsuma2/status
   :target: https://quay.io/repository/biocontainers/satsuma2
.. _`satsuma2/tags`: https://quay.io/repository/biocontainers/satsuma2?tab=tags


.. raw:: html

    <script>
        var package = "satsuma2";
        var versions = ["20161123","20161123","20161123","20161123","20161123"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/satsuma2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/satsuma2/README.html