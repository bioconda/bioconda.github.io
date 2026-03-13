:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trawler'
.. highlight: bash

trawler
=======

.. conda:recipe:: trawler
   :replaces_section_title:
   :noindex:

   Trawler is a motif discovery tool used to identify enriched motifs in a set of sequenced regions of DNA.

   :homepage: https://trawler.erc.monash.edu.au/help.html
   :license: GPLv2
   :recipe: /`trawler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trawler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trawler/meta.yaml>`_

   


.. conda:package:: trawler

   |downloads_trawler| |docker_trawler|

   :versions:
      
      

      ``2.0-4``,  ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      

   
   :depends on ghostscript: 
   :depends on openjdk: 
   :depends on perl: ``>=5.22``
   :depends on perl-algorithm-cluster: 
   :depends on perl-cgi: 

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

    pixi global install trawler

to add into an existing workspace instead, run::

    pixi add trawler

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install trawler

Alternatively, to install into a new environment, run::

    conda create -n envname trawler

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/trawler:<tag>

(see `trawler/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_trawler| image:: https://img.shields.io/conda/dn/bioconda/trawler.svg?style=flat
   :target: https://anaconda.org/bioconda/trawler
   :alt:   (downloads)
.. |docker_trawler| image:: https://quay.io/repository/biocontainers/trawler/status
   :target: https://quay.io/repository/biocontainers/trawler
.. _`trawler/tags`: https://quay.io/repository/biocontainers/trawler?tab=tags


.. raw:: html

    <script>
        var package = "trawler";
        var versions = ["2.0","2.0","2.0","2.0","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trawler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trawler/README.html