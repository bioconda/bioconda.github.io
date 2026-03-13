:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tmscoring'
.. highlight: bash

tmscoring
=========

.. conda:recipe:: tmscoring
   :replaces_section_title:
   :noindex:

   Python implementation of the TMscore program.

   :homepage: https://github.com/Dapid/tmscoring
   :documentation: https://github.com/Dapid/tmscoring/blob/master/README.md
   
   :license: BSD / BSD-3-Clause
   :recipe: /`tmscoring <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tmscoring>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tmscoring/meta.yaml>`_

   \# tmscoring
   Python implementation of the \[TMscore\]\(https\:\/\/zhanglab.ccmb.med.umich.edu\/TM\-score\/\) program to compare structures of the same protein.


.. conda:package:: tmscoring

   |downloads_tmscoring| |docker_tmscoring|

   :versions:
      
      

      ``0.4.post0-0``

      

   
   :depends on biopython: 
   :depends on iminuit: ``<2``
   :depends on numpy: 
   :depends on python: ``<3.12``

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

    pixi global install tmscoring

to add into an existing workspace instead, run::

    pixi add tmscoring

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tmscoring

Alternatively, to install into a new environment, run::

    conda create -n envname tmscoring

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tmscoring:<tag>

(see `tmscoring/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tmscoring| image:: https://img.shields.io/conda/dn/bioconda/tmscoring.svg?style=flat
   :target: https://anaconda.org/bioconda/tmscoring
   :alt:   (downloads)
.. |docker_tmscoring| image:: https://quay.io/repository/biocontainers/tmscoring/status
   :target: https://quay.io/repository/biocontainers/tmscoring
.. _`tmscoring/tags`: https://quay.io/repository/biocontainers/tmscoring?tab=tags


.. raw:: html

    <script>
        var package = "tmscoring";
        var versions = ["0.4.post0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tmscoring/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tmscoring/README.html