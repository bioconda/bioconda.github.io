:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flapjack'
.. highlight: bash

flapjack
========

.. conda:recipe:: flapjack
   :replaces_section_title:
   :noindex:

   Flapjack provides interactive visualizations of high\-throughput genotyping data.

   :homepage: https://ics.hutton.ac.uk/flapjack
   :license: BSD-2-Clause
   :recipe: /`flapjack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flapjack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flapjack/meta.yaml>`_

   


.. conda:package:: flapjack

   |downloads_flapjack| |docker_flapjack|

   :versions:
      
      

      ``1.20.10.07-1``,  ``1.20.10.07-0``,  ``1.18.06.29-1``,  ``1.18.06.29-0``,  ``1.18.06.13-2``,  ``1.18.06.13-1``,  ``1.16.10.31-1``,  ``1.16.10.31-0``

      

   
   :depends on openjdk: ``>=11``

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

    pixi global install flapjack

to add into an existing workspace instead, run::

    pixi add flapjack

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install flapjack

Alternatively, to install into a new environment, run::

    conda create -n envname flapjack

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/flapjack:<tag>

(see `flapjack/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_flapjack| image:: https://img.shields.io/conda/dn/bioconda/flapjack.svg?style=flat
   :target: https://anaconda.org/bioconda/flapjack
   :alt:   (downloads)
.. |docker_flapjack| image:: https://quay.io/repository/biocontainers/flapjack/status
   :target: https://quay.io/repository/biocontainers/flapjack
.. _`flapjack/tags`: https://quay.io/repository/biocontainers/flapjack?tab=tags


.. raw:: html

    <script>
        var package = "flapjack";
        var versions = ["1.20.10.07","1.20.10.07","1.18.06.29","1.18.06.29","1.18.06.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flapjack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flapjack/README.html