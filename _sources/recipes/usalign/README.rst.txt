:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'usalign'
.. highlight: bash

usalign
=======

.. conda:recipe:: usalign
   :replaces_section_title:
   :noindex:

   Universal structure alignment of monomeric\, complex proteins and nucleic acids

   :homepage: https://zhanggroup.org/US-align
   :documentation: https://zhanggroup.org/US-align/help
   
   :developer docs: https://github.com/pylelab/USalign
   :license: OTHER / UNKNOWN
   :recipe: /`usalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/usalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/usalign/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41592-022-01585-1`

   US\-align \(Universal Structural alignment\) is a unified protocol
   to compare 3D structures of different macromolecules \(proteins\, RNAs and DNAs\)
   in different forms \(monomers\, oligomers and heterocomplexes\)
   for both pairwise and multiple structure alignments.
   The core alogrithm of US\-align is extended from TM\-align and generates optimal structural alignments
   by maximizing TM\-score of compared strucures through heuristic dynamic programming iterations.
   Large\-scale benchmark tests showed that US\-align can generate more accurate structural alignments
   with significantly reduced CPU time\, compared to the state\-of\-the\-art methods developed
   for specific structural alignment tasks.
   TM\-score has values in \(0\,1\] with 1 indicating an identical structure match\,
   where a TM\-score ≥0.5 \(or 0.45\) means the structures share the same global topology for proteins \(or RNAs\).



.. conda:package:: usalign

   |downloads_usalign| |docker_usalign|

   :versions:
      
      

      ``20241201-0``,  ``2024.07.30-1``,  ``2024.07.30-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install usalign

to add into an existing workspace instead, run::

    pixi add usalign

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install usalign

Alternatively, to install into a new environment, run::

    conda create -n envname usalign

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/usalign:<tag>

(see `usalign/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_usalign| image:: https://img.shields.io/conda/dn/bioconda/usalign.svg?style=flat
   :target: https://anaconda.org/bioconda/usalign
   :alt:   (downloads)
.. |docker_usalign| image:: https://quay.io/repository/biocontainers/usalign/status
   :target: https://quay.io/repository/biocontainers/usalign
.. _`usalign/tags`: https://quay.io/repository/biocontainers/usalign?tab=tags


.. raw:: html

    <script>
        var package = "usalign";
        var versions = ["20241201","2024.07.30","2024.07.30"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/usalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/usalign/README.html