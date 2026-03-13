:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqsero2'
.. highlight: bash

seqsero2
========

.. conda:recipe:: seqsero2
   :replaces_section_title:
   :noindex:

   Salmonella serotype prediction from genome sequencing data.

   :homepage: https://github.com/denglab/SeqSero2
   :license: GPL / GPL-2.0-or-later
   :recipe: /`seqsero2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqsero2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqsero2/meta.yaml>`_
   :links: doi: :doi:`10.1128/AEM.01746-19`

   


.. conda:package:: seqsero2

   |downloads_seqsero2| |docker_seqsero2|

   :versions:
      
      

      ``1.3.2-0``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.2.1-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.01-0``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends on bedtools: ``2.17.0.*``
   :depends on biopython: ``1.73.*``
   :depends on blast: ``>=2.2.28``
   :depends on bwa: ``>=0.7.12``
   :depends on python: ``>=3``
   :depends on salmid: ``0.1.23.*``
   :depends on samtools: ``>=1.8``
   :depends on seqtk: ``>=1.3``
   :depends on spades: ``>=3.15.5``
   :depends on sra-tools: ``>=2.8.0``

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

    pixi global install seqsero2

to add into an existing workspace instead, run::

    pixi add seqsero2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install seqsero2

Alternatively, to install into a new environment, run::

    conda create -n envname seqsero2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/seqsero2:<tag>

(see `seqsero2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_seqsero2| image:: https://img.shields.io/conda/dn/bioconda/seqsero2.svg?style=flat
   :target: https://anaconda.org/bioconda/seqsero2
   :alt:   (downloads)
.. |docker_seqsero2| image:: https://quay.io/repository/biocontainers/seqsero2/status
   :target: https://quay.io/repository/biocontainers/seqsero2
.. _`seqsero2/tags`: https://quay.io/repository/biocontainers/seqsero2?tab=tags


.. raw:: html

    <script>
        var package = "seqsero2";
        var versions = ["1.3.2","1.3.1","1.3.1","1.2.1","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqsero2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqsero2/README.html