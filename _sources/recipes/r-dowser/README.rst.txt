:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-dowser'
.. highlight: bash

r-dowser
========

.. conda:recipe:: r-dowser
   :replaces_section_title:
   :noindex:

   Provides a set of functions for inferring\, visualizing\, and analyzing B cell phylogenetic trees. Provides methods to 1\) reconstruct unmutated ancestral sequences\, 2\) build B cell phylogenetic trees using multiple methods\, 3\) visualize trees with metadata at the tips\, 4\) reconstruct intermediate sequences\, 5\) detect biased ancestor\-descendant relationships among metadata types Workflow examples available at documentation site \(see URL\). Citations\: Hoehn et al \(2020\) \<doi\:10.1101\/2020.05.30.124446\>\, Hoehn et al \(2021\) \<doi\:10.1101\/2021.01.06.425648\>.

   :homepage: https://dowser.readthedocs.io
   :license: AGPL / AGPL-3
   :recipe: /`r-dowser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-dowser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-dowser/meta.yaml>`_

   


.. conda:package:: r-dowser

   |downloads_r-dowser| |docker_r-dowser|

   :versions:
      
      

      ``1.2.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.1.0-0``

      

   
   :depends on bioconductor-biostrings: 
   :depends on bioconductor-ggtree: 
   :depends on r-alakazam: ``>=1.1.0``
   :depends on r-ape: ``>=5.5``
   :depends on r-base: ``>=4.2,<4.3.0a0``
   :depends on r-dplyr: ``>=0.8.1``
   :depends on r-ggplot2: ``>=3.2.0``
   :depends on r-gridextra: 
   :depends on r-markdown: 
   :depends on r-phangorn: ``>=2.7.1``
   :depends on r-phylotate: 
   :depends on r-rcolorbrewer: 
   :depends on r-rlang: 
   :depends on r-shazam: ``>=1.1.0``
   :depends on r-stringr: 
   :depends on r-tidyr: 
   :depends on r-tidyselect: 

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

    pixi global install r-dowser

to add into an existing workspace instead, run::

    pixi add r-dowser

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-dowser

Alternatively, to install into a new environment, run::

    conda create -n envname r-dowser

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-dowser:<tag>

(see `r-dowser/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-dowser| image:: https://img.shields.io/conda/dn/bioconda/r-dowser.svg?style=flat
   :target: https://anaconda.org/bioconda/r-dowser
   :alt:   (downloads)
.. |docker_r-dowser| image:: https://quay.io/repository/biocontainers/r-dowser/status
   :target: https://quay.io/repository/biocontainers/r-dowser
.. _`r-dowser/tags`: https://quay.io/repository/biocontainers/r-dowser?tab=tags


.. raw:: html

    <script>
        var package = "r-dowser";
        var versions = ["1.2.0","1.1.0","1.1.0","1.0.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-dowser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-dowser/README.html