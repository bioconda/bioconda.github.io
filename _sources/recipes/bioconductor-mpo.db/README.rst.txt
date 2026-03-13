:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mpo.db'
.. highlight: bash

bioconductor-mpo.db
===================

.. conda:recipe:: bioconductor-mpo.db
   :replaces_section_title:
   :noindex:

   A set of annotation maps describing the Mouse Phenotype Ontology

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/MPO.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mpo.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mpo.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mpo.db/meta.yaml>`_

   We have developed the human disease ontology R package HDO.db\, which provides the semantic relationship between human diseases. Relying on the DOSE and GOSemSim packages we developed\, we can carry out disease enrichment and semantic similarity analyses. Many biological studies are achieved through mouse models\, and a large number of data indicate the association between genotypes and phenotypes or diseases.  The study of model organisms can be transformed into useful knowledge about normal human biology and disease to facilitate treatment and early screening for diseases. Organism\-specific genotype\-phenotypic associations can be applied to cross\-species phenotypic studies to clarify previously unknown phenotypic connections in other species. Using the same principle to diseases can identify genetic associations and even help to identify disease associations that are not obvious. Therefore\, as a supplement to HDO.db and DOSE\, we developed mouse phenotypic ontology R package MPO.db.


.. conda:package:: bioconductor-mpo.db

   |downloads_bioconductor-mpo.db| |docker_bioconductor-mpo.db|

   :versions:
      
      

      ``0.99.8-1``,  ``0.99.8-0``,  ``0.99.7-0``

      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dbi: 

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

    pixi global install bioconductor-mpo.db

to add into an existing workspace instead, run::

    pixi add bioconductor-mpo.db

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mpo.db

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mpo.db

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mpo.db:<tag>

(see `bioconductor-mpo.db/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mpo.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mpo.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mpo.db
   :alt:   (downloads)
.. |docker_bioconductor-mpo.db| image:: https://quay.io/repository/biocontainers/bioconductor-mpo.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mpo.db
.. _`bioconductor-mpo.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mpo.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mpo.db";
        var versions = ["0.99.8","0.99.8","0.99.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mpo.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mpo.db/README.html