:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ancestry_hmm'
.. highlight: bash

ancestry_hmm
============

.. conda:recipe:: ancestry_hmm
   :replaces_section_title:
   :noindex:

   Software for local ancestry inference

   :homepage: https://github.com/russcd/Ancestry_HMM
   :license: GPL3
   :recipe: /`ancestry_hmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ancestry_hmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ancestry_hmm/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pgen.1006529`

   A hidden Markov model approach for simultaneously estimating local ancestry and admixture
   time using next generation sequence data in samples of arbitrary ploidy.



.. conda:package:: ancestry_hmm

   |downloads_ancestry_hmm| |docker_ancestry_hmm|

   :versions:
      
      

      ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends on armadillo: ``>=14.2,<15.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on selam: 

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

    pixi global install ancestry_hmm

to add into an existing workspace instead, run::

    pixi add ancestry_hmm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ancestry_hmm

Alternatively, to install into a new environment, run::

    conda create -n envname ancestry_hmm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ancestry_hmm:<tag>

(see `ancestry_hmm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ancestry_hmm| image:: https://img.shields.io/conda/dn/bioconda/ancestry_hmm.svg?style=flat
   :target: https://anaconda.org/bioconda/ancestry_hmm
   :alt:   (downloads)
.. |docker_ancestry_hmm| image:: https://quay.io/repository/biocontainers/ancestry_hmm/status
   :target: https://quay.io/repository/biocontainers/ancestry_hmm
.. _`ancestry_hmm/tags`: https://quay.io/repository/biocontainers/ancestry_hmm?tab=tags


.. raw:: html

    <script>
        var package = "ancestry_hmm";
        var versions = ["1.0.2","1.0.2","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ancestry_hmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ancestry_hmm/README.html