:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'emblmygff3'
.. highlight: bash

emblmygff3
==========

.. conda:recipe:: emblmygff3
   :replaces_section_title:
   :noindex:

   An efficient way to convert gff3 annotation files into EMBL format ready to submit.

   :homepage: https://github.com/NBISweden/EMBLmyGFF3
   :documentation: https://github.com/NBISweden/EMBLmyGFF3/blob/v2.4/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`emblmygff3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emblmygff3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emblmygff3/meta.yaml>`_

   


.. conda:package:: emblmygff3

   |downloads_emblmygff3| |docker_emblmygff3|

   :versions:
      
      

      ``2.4-1``,  ``2.4-0``,  ``2.3-0``,  ``2.2-1``,  ``2.2-0``,  ``2.1-0``,  ``2-1``,  ``2-0``,  ``1.3-0``

      

   
   :depends on bcbio-gff: ``>=0.7.0``
   :depends on biopython: ``>=1.78``
   :depends on numpy: ``>=1.22``
   :depends on python: ``>=3.9``

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

    pixi global install emblmygff3

to add into an existing workspace instead, run::

    pixi add emblmygff3

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install emblmygff3

Alternatively, to install into a new environment, run::

    conda create -n envname emblmygff3

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/emblmygff3:<tag>

(see `emblmygff3/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_emblmygff3| image:: https://img.shields.io/conda/dn/bioconda/emblmygff3.svg?style=flat
   :target: https://anaconda.org/bioconda/emblmygff3
   :alt:   (downloads)
.. |docker_emblmygff3| image:: https://quay.io/repository/biocontainers/emblmygff3/status
   :target: https://quay.io/repository/biocontainers/emblmygff3
.. _`emblmygff3/tags`: https://quay.io/repository/biocontainers/emblmygff3?tab=tags


.. raw:: html

    <script>
        var package = "emblmygff3";
        var versions = ["2.4","2.4","2.3","2.2","2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/emblmygff3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/emblmygff3/README.html