:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ibdseq'
.. highlight: bash

ibdseq
======

.. conda:recipe:: ibdseq
   :replaces_section_title:
   :noindex:

   IBDseq is a software program for detecting segments of identity\-by\-descent \(IBD\) and homozygosity\-by\-descent \(HBD\) in unphased genetic sequence data.

   :homepage: http://faculty.washington.edu/browning/ibdseq.html
   :license: Apache v2.0
   :recipe: /`ibdseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ibdseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ibdseq/meta.yaml>`_
   :links: biotools: :biotools:`IBDseq`, doi: :doi:`10.1016/j.ajhg.2013.09.014`

   


.. conda:package:: ibdseq

   |downloads_ibdseq| |docker_ibdseq|

   :versions:
      
      

      ``r1206-3``,  ``r1206-2``,  ``r1206-1``,  ``r1206-0``

      

   
   :depends on openjdk: ``>=6.0.77``

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

    pixi global install ibdseq

to add into an existing workspace instead, run::

    pixi add ibdseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ibdseq

Alternatively, to install into a new environment, run::

    conda create -n envname ibdseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ibdseq:<tag>

(see `ibdseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ibdseq| image:: https://img.shields.io/conda/dn/bioconda/ibdseq.svg?style=flat
   :target: https://anaconda.org/bioconda/ibdseq
   :alt:   (downloads)
.. |docker_ibdseq| image:: https://quay.io/repository/biocontainers/ibdseq/status
   :target: https://quay.io/repository/biocontainers/ibdseq
.. _`ibdseq/tags`: https://quay.io/repository/biocontainers/ibdseq?tab=tags


.. raw:: html

    <script>
        var package = "ibdseq";
        var versions = ["r1206","r1206","r1206","r1206"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ibdseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ibdseq/README.html