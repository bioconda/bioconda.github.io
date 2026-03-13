:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqsero2s'
.. highlight: bash

seqsero2s
=========

.. conda:recipe:: seqsero2s
   :replaces_section_title:
   :noindex:

   Simplified Salmonella serotype prediction from genome sequencing data

   :homepage: https://github.com/LSTUGA/SeqSero2S
   :license: GPL / GPL-2.0-or-later
   :recipe: /`seqsero2s <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqsero2s>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqsero2s/meta.yaml>`_
   :links: doi: :doi:`10.1128/aem.02600-24`

   


.. conda:package:: seqsero2s

   |downloads_seqsero2s| |docker_seqsero2s|

   :versions:
      
      

      ``1.1.4-1``,  ``1.1.4-0``,  ``1.1.3-0``

      

   
   :depends on bedtools: ``>=2.17``
   :depends on blast: ``>=2.2``
   :depends on bwa: ``>=0.7``
   :depends on mlst: ``>=2.32.2``
   :depends on python: ``>=3``
   :depends on salmid: 
   :depends on samtools: 
   :depends on seqtk: ``>=1.3``
   :depends on spades: ``>=3.9``
   :depends on sra-tools: ``>=2.8``
   :depends on stringmlst: ``>=0.6``

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

    pixi global install seqsero2s

to add into an existing workspace instead, run::

    pixi add seqsero2s

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install seqsero2s

Alternatively, to install into a new environment, run::

    conda create -n envname seqsero2s

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/seqsero2s:<tag>

(see `seqsero2s/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_seqsero2s| image:: https://img.shields.io/conda/dn/bioconda/seqsero2s.svg?style=flat
   :target: https://anaconda.org/bioconda/seqsero2s
   :alt:   (downloads)
.. |docker_seqsero2s| image:: https://quay.io/repository/biocontainers/seqsero2s/status
   :target: https://quay.io/repository/biocontainers/seqsero2s
.. _`seqsero2s/tags`: https://quay.io/repository/biocontainers/seqsero2s?tab=tags


.. raw:: html

    <script>
        var package = "seqsero2s";
        var versions = ["1.1.4","1.1.4","1.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqsero2s/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqsero2s/README.html