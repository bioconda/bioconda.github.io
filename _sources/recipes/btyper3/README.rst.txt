:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'btyper3'
.. highlight: bash

btyper3
=======

.. conda:recipe:: btyper3
   :replaces_section_title:
   :noindex:

   In silico taxonomic classification of Bacillus cereus group isolates using assembled genomes

   :homepage: https://github.com/lmc297/BTyper3
   :license: GPL / GPL-3
   :recipe: /`btyper3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/btyper3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/btyper3/meta.yaml>`_
   :links: https: :https:`//doi.org/10.3389/fmicb.2020.580691`

   


.. conda:package:: btyper3

   |downloads_btyper3| |docker_btyper3|

   :versions:
      
      

      ``3.4.0-0``,  ``3.3.4-0``,  ``3.3.3-0``,  ``3.3.2-0``,  ``3.3.1-0``,  ``3.2.0-0``

      

   
   :depends on biopython: ``>=1.74``
   :depends on blast: ``>=2.9.0``
   :depends on numpy: ``>=1.18``
   :depends on pandas: ``>=1.0``
   :depends on pyfastani: ``>=0.4``
   :depends on python: ``>=3.7``

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

    pixi global install btyper3

to add into an existing workspace instead, run::

    pixi add btyper3

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install btyper3

Alternatively, to install into a new environment, run::

    conda create -n envname btyper3

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/btyper3:<tag>

(see `btyper3/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_btyper3| image:: https://img.shields.io/conda/dn/bioconda/btyper3.svg?style=flat
   :target: https://anaconda.org/bioconda/btyper3
   :alt:   (downloads)
.. |docker_btyper3| image:: https://quay.io/repository/biocontainers/btyper3/status
   :target: https://quay.io/repository/biocontainers/btyper3
.. _`btyper3/tags`: https://quay.io/repository/biocontainers/btyper3?tab=tags


.. raw:: html

    <script>
        var package = "btyper3";
        var versions = ["3.4.0","3.3.4","3.3.3","3.3.2","3.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/btyper3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/btyper3/README.html