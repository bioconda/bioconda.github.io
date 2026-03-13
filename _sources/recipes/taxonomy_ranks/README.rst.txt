:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'taxonomy_ranks'
.. highlight: bash

taxonomy_ranks
==============

.. conda:recipe:: taxonomy_ranks
   :replaces_section_title:
   :noindex:

   To get taxonomy ranks information for taxid\, species name\, or higher ranks \(e.g.\, genus\, family\) with ETE3 from NCBI Taxonomy database.

   :homepage: https://github.com/linzhi2013/taxonomy_ranks
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`taxonomy_ranks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxonomy_ranks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxonomy_ranks/meta.yaml>`_
   :links: biotools: :biotools:`taxonomy_ranks`

   


.. conda:package:: taxonomy_ranks

   |downloads_taxonomy_ranks| |docker_taxonomy_ranks|

   :versions:
      
      

      ``0.0.10-0``,  ``0.0.8-0``,  ``0.0.7-0``

      

   
   :depends on ete3: 
   :depends on python: ``>=2.7.15``
   :depends on six: 

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

    pixi global install taxonomy_ranks

to add into an existing workspace instead, run::

    pixi add taxonomy_ranks

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install taxonomy_ranks

Alternatively, to install into a new environment, run::

    conda create -n envname taxonomy_ranks

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/taxonomy_ranks:<tag>

(see `taxonomy_ranks/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_taxonomy_ranks| image:: https://img.shields.io/conda/dn/bioconda/taxonomy_ranks.svg?style=flat
   :target: https://anaconda.org/bioconda/taxonomy_ranks
   :alt:   (downloads)
.. |docker_taxonomy_ranks| image:: https://quay.io/repository/biocontainers/taxonomy_ranks/status
   :target: https://quay.io/repository/biocontainers/taxonomy_ranks
.. _`taxonomy_ranks/tags`: https://quay.io/repository/biocontainers/taxonomy_ranks?tab=tags


.. raw:: html

    <script>
        var package = "taxonomy_ranks";
        var versions = ["0.0.10","0.0.8","0.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/taxonomy_ranks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/taxonomy_ranks/README.html