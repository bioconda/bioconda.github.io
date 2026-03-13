:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'palikiss'
.. highlight: bash

palikiss
========

.. conda:recipe:: palikiss
   :replaces_section_title:
   :noindex:

   pAliKiss predicts RNA secondary structures for fixed RNA multiple sequence alignments\, with special attention for pseudoknotted structures.

   :homepage: https://bibiserv.cebitec.uni-bielefeld.de/palikiss
   :license: GPL-3.0-or-later
   :recipe: /`palikiss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/palikiss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/palikiss/meta.yaml>`_
   :links: doi: :doi:`10.1007/978-3-642-15294-8_5`, doi: :doi:`10.1093/bioinformatics/btu649`

   


.. conda:package:: palikiss

   |downloads_palikiss| |docker_palikiss|

   :versions:
      
      

      ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``

      

   
   :depends on bellmans-gapc: ``>=2024.01.12``
   :depends on bellmans-gapc: ``>=2024.1.12``
   :depends on libgcc: ``>=13``
   :depends on libopenblas: ``>=0.3.28,<1.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``

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

    pixi global install palikiss

to add into an existing workspace instead, run::

    pixi add palikiss

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install palikiss

Alternatively, to install into a new environment, run::

    conda create -n envname palikiss

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/palikiss:<tag>

(see `palikiss/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_palikiss| image:: https://img.shields.io/conda/dn/bioconda/palikiss.svg?style=flat
   :target: https://anaconda.org/bioconda/palikiss
   :alt:   (downloads)
.. |docker_palikiss| image:: https://quay.io/repository/biocontainers/palikiss/status
   :target: https://quay.io/repository/biocontainers/palikiss
.. _`palikiss/tags`: https://quay.io/repository/biocontainers/palikiss?tab=tags


.. raw:: html

    <script>
        var package = "palikiss";
        var versions = ["1.1.0","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/palikiss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/palikiss/README.html