:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'progressivemauve'
.. highlight: bash

progressivemauve
================

.. conda:recipe:: progressivemauve
   :replaces_section_title:
   :noindex:

   progressiveMauve computes multiple genome alignment with gene gain\, loss and rearrangement

   :homepage: http://darlinglab.org/mauve/user-guide/progressivemauve.html
   :license: GNU General Public License version 2.0 (GPLv2)
   :recipe: /`progressivemauve <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/progressivemauve>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/progressivemauve/meta.yaml>`_

   


.. conda:package:: progressivemauve

   |downloads_progressivemauve| |docker_progressivemauve|

   :versions:
      
      

      ``snapshot_2015_02_13-3``,  ``snapshot_2015_02_13-2``,  ``snapshot_2015_02_13-1``,  ``snapshot_2015_02_13-0``

      

   

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

    pixi global install progressivemauve

to add into an existing workspace instead, run::

    pixi add progressivemauve

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install progressivemauve

Alternatively, to install into a new environment, run::

    conda create -n envname progressivemauve

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/progressivemauve:<tag>

(see `progressivemauve/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_progressivemauve| image:: https://img.shields.io/conda/dn/bioconda/progressivemauve.svg?style=flat
   :target: https://anaconda.org/bioconda/progressivemauve
   :alt:   (downloads)
.. |docker_progressivemauve| image:: https://quay.io/repository/biocontainers/progressivemauve/status
   :target: https://quay.io/repository/biocontainers/progressivemauve
.. _`progressivemauve/tags`: https://quay.io/repository/biocontainers/progressivemauve?tab=tags


.. raw:: html

    <script>
        var package = "progressivemauve";
        var versions = ["snapshot_2015_02_13","snapshot_2015_02_13","snapshot_2015_02_13","snapshot_2015_02_13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/progressivemauve/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/progressivemauve/README.html