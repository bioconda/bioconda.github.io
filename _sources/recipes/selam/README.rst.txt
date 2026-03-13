:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'selam'
.. highlight: bash

selam
=====

.. conda:recipe:: selam
   :replaces_section_title:
   :noindex:

   Simulation of Epistasis Local adaptation\, with Ancestry and Mate choice

   :homepage: https://github.com/russcd/SELAM/
   :license: GPL3
   :recipe: /`selam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/selam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/selam/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btw365`

   SELAM \(Simulation of Epistasis\, Local adaptation with Admixture and Mate
   choice\) is a forward time population genetic simulation for studying
   admixture between ancestral subpopulations. This program tracks local
   ancestry along chromosomes. SELAM supports complex demography
   scenarios\, including changes in population sizes\, migration rates\, and
   arbitrary numbers of subpopulations. This program can also accommodate
   sophisticated selective regimes\, including dominance\, epistasis\, local
   adaptation\, and mate choice.



.. conda:package:: selam

   |downloads_selam| |docker_selam|

   :versions:
      
      

      ``0.9-4``,  ``0.9-3``,  ``0.9-2``,  ``0.9-1``,  ``0.9-0``

      

   
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install selam

to add into an existing workspace instead, run::

    pixi add selam

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install selam

Alternatively, to install into a new environment, run::

    conda create -n envname selam

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/selam:<tag>

(see `selam/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_selam| image:: https://img.shields.io/conda/dn/bioconda/selam.svg?style=flat
   :target: https://anaconda.org/bioconda/selam
   :alt:   (downloads)
.. |docker_selam| image:: https://quay.io/repository/biocontainers/selam/status
   :target: https://quay.io/repository/biocontainers/selam
.. _`selam/tags`: https://quay.io/repository/biocontainers/selam?tab=tags


.. raw:: html

    <script>
        var package = "selam";
        var versions = ["0.9","0.9","0.9","0.9","0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/selam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/selam/README.html