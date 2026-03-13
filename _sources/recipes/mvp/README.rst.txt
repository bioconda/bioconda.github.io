:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mvp'
.. highlight: bash

mvp
===

.. conda:recipe:: mvp
   :replaces_section_title:
   :noindex:

   detect creation\/destruction of sequence motifs as a result of mutations

   :homepage: https://gitlab.com/LPCDRP/motif-variants
   :license: GPLv3+
   :recipe: /`mvp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mvp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mvp/meta.yaml>`_

   Sequence variation may cause the appearance or disappearance of certain motifs. Since motifs can be recognition sites for biological functions such as regulation or DNA modification\, their gain and loss can have additional consequences. Using a list of variants in variant call format\, the corresponding reference sequence\, and a set of motifs to search for\,mvp \(motif\-variant probe\) identifies variants responsible for changing the number of occurrences of these motifs in the sequence. mvp can process both nucleotide and amino acid sequences.


.. conda:package:: mvp

   |downloads_mvp| |docker_mvp|

   :versions:
      
      

      ``0.4.3-1``,  ``0.4.3-0``,  ``0.4.1-1``,  ``0.4.1-0``

      

   
   :depends on biopython: 
   :depends on pysam: ``>=0.8.4``
   :depends on python: 

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

    pixi global install mvp

to add into an existing workspace instead, run::

    pixi add mvp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mvp

Alternatively, to install into a new environment, run::

    conda create -n envname mvp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mvp:<tag>

(see `mvp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mvp| image:: https://img.shields.io/conda/dn/bioconda/mvp.svg?style=flat
   :target: https://anaconda.org/bioconda/mvp
   :alt:   (downloads)
.. |docker_mvp| image:: https://quay.io/repository/biocontainers/mvp/status
   :target: https://quay.io/repository/biocontainers/mvp
.. _`mvp/tags`: https://quay.io/repository/biocontainers/mvp?tab=tags


.. raw:: html

    <script>
        var package = "mvp";
        var versions = ["0.4.3","0.4.3","0.4.1","0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mvp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mvp/README.html