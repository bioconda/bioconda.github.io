:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'provean'
.. highlight: bash

provean
=======

.. conda:recipe:: provean
   :replaces_section_title:
   :noindex:

   PROVEAN \(Protein Variation Effect Analyzer\) is a software tool which predicts whether an amino acid substitution or indel has an impact on the biological function of a protein.

   :homepage: https://www.jcvi.org/research/provean
   :license: GPL / GPL-3
   :recipe: /`provean <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/provean>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/provean/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btv195`, doi: :doi:`10.1371/journal.pone.0046688`

   


.. conda:package:: provean

   |downloads_provean| |docker_provean|

   :versions:
      
      

      ``1.1.5-3``,  ``1.1.5-2``,  ``1.1.5-1``,  ``1.1.5-0``

      

   
   :depends on blast: ``<=2.9``
   :depends on cd-hit: ``4.8.*``
   :depends on cd-hit: ``>=4.8.1,<5.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install provean

to add into an existing workspace instead, run::

    pixi add provean

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install provean

Alternatively, to install into a new environment, run::

    conda create -n envname provean

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/provean:<tag>

(see `provean/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_provean| image:: https://img.shields.io/conda/dn/bioconda/provean.svg?style=flat
   :target: https://anaconda.org/bioconda/provean
   :alt:   (downloads)
.. |docker_provean| image:: https://quay.io/repository/biocontainers/provean/status
   :target: https://quay.io/repository/biocontainers/provean
.. _`provean/tags`: https://quay.io/repository/biocontainers/provean?tab=tags


.. raw:: html

    <script>
        var package = "provean";
        var versions = ["1.1.5","1.1.5","1.1.5","1.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/provean/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/provean/README.html