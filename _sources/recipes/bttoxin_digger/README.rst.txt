:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bttoxin_digger'
.. highlight: bash

bttoxin_digger
==============

.. conda:recipe:: bttoxin_digger
   :replaces_section_title:
   :noindex:

   A toxin minging tool for Bacillus thuringiensis

   :homepage: https://github.com/liaochenlanruo/BtToxin_Digger/blob/master/README.md
   :developer docs: https://github.com/liaochenlanruo/BtToxin_Digger/tree/master
   :license: GPL / GPLv3
   :recipe: /`bttoxin_digger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bttoxin_digger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bttoxin_digger/meta.yaml>`_
   :links: biotools: :biotools:`bttoxin_digger`

   


.. conda:package:: bttoxin_digger

   |downloads_bttoxin_digger| |docker_bttoxin_digger|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.10-0</code>,  <code>1.0.9-0</code>,  <code>1.0.8-0</code>,  <code>1.0.7-0</code>,  <code>1.0.6-1</code>,  <code>1.0.6-0</code>,  <code>1.0.5-1</code>,  <code>1.0.5-0</code>,  <code>1.0.4-0</code>,  </span></summary>
      

      ``1.0.10-0``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-1``,  ``1.0.6-0``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on abyss: 
   :depends on blast: 
   :depends on bwa: 
   :depends on canu: 
   :depends on fastp: 
   :depends on hmmer: 
   :depends on libsvm: 
   :depends on perl-bioperl: ``>=1.7.2``
   :depends on perl-file-tee: 
   :depends on perl-getopt-long: 
   :depends on perl-list-util: 
   :depends on perl-pod-usage: 
   :depends on racon: 
   :depends on spades: ``>=3.6.2,<=3.13.0``
   :depends on unicycler: ``0.4.7.*``

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

    pixi global install bttoxin_digger

to add into an existing workspace instead, run::

    pixi add bttoxin_digger

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bttoxin_digger

Alternatively, to install into a new environment, run::

    conda create -n envname bttoxin_digger

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bttoxin_digger:<tag>

(see `bttoxin_digger/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bttoxin_digger| image:: https://img.shields.io/conda/dn/bioconda/bttoxin_digger.svg?style=flat
   :target: https://anaconda.org/bioconda/bttoxin_digger
   :alt:   (downloads)
.. |docker_bttoxin_digger| image:: https://quay.io/repository/biocontainers/bttoxin_digger/status
   :target: https://quay.io/repository/biocontainers/bttoxin_digger
.. _`bttoxin_digger/tags`: https://quay.io/repository/biocontainers/bttoxin_digger?tab=tags


.. raw:: html

    <script>
        var package = "bttoxin_digger";
        var versions = ["1.0.10","1.0.9","1.0.8","1.0.7","1.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bttoxin_digger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bttoxin_digger/README.html