:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mauvealigner'
.. highlight: bash

mauvealigner
============

.. conda:recipe:: mauvealigner
   :replaces_section_title:
   :noindex:

   The mauveAligner and progressiveMauve command\-line tools for generating multiple genome alignments in the presence of large\-scale evolutionary events

   :homepage: http://darlinglab.org/mauve/
   :developer docs: https://sourceforge.net/projects/mauve/
   :license: GPL / GPL-2.0
   :recipe: /`mauvealigner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mauvealigner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mauvealigner/meta.yaml>`_

   


.. conda:package:: mauvealigner

   |downloads_mauvealigner| |docker_mauvealigner|

   :versions:
      
      

      ``1.2.0-5``,  ``1.2.0-4``,  ``1.2.0-3``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends on boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on libgenome: ``>=1.3.1,<1.4.0a0``
   :depends on libmems: ``>=1.6.0,<1.7.0a0``
   :depends on libmuscle: 
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

    pixi global install mauvealigner

to add into an existing workspace instead, run::

    pixi add mauvealigner

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mauvealigner

Alternatively, to install into a new environment, run::

    conda create -n envname mauvealigner

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mauvealigner:<tag>

(see `mauvealigner/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mauvealigner| image:: https://img.shields.io/conda/dn/bioconda/mauvealigner.svg?style=flat
   :target: https://anaconda.org/bioconda/mauvealigner
   :alt:   (downloads)
.. |docker_mauvealigner| image:: https://quay.io/repository/biocontainers/mauvealigner/status
   :target: https://quay.io/repository/biocontainers/mauvealigner
.. _`mauvealigner/tags`: https://quay.io/repository/biocontainers/mauvealigner?tab=tags


.. raw:: html

    <script>
        var package = "mauvealigner";
        var versions = ["1.2.0","1.2.0","1.2.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mauvealigner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mauvealigner/README.html