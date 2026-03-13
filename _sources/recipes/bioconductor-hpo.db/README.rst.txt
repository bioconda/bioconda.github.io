:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hpo.db'
.. highlight: bash

bioconductor-hpo.db
===================

.. conda:recipe:: bioconductor-hpo.db
   :replaces_section_title:
   :noindex:

   A set of annotation maps describing the entire Human Phenotype Ontology

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/HPO.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hpo.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hpo.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hpo.db/meta.yaml>`_

   Human Phenotype Ontology \(HPO\) was developed to create a consistent description of gene products with disease perspectives\, and is essential for supporting functional genomics in disease context. Accurate disease descriptions can discover new relationships between genes and disease\, and new functions for previous uncharacteried genes and alleles.We have developed the \[DOSE\]\(https\:\/\/bioconductor.org\/packages\/DOSE\/\) package for semantic similarity analysis and disease enrichment analysis\, and \`DOSE\` import an Bioconductor package \'DO.db\' to get the relationship\(such as parent and child\) between MPO terms. But \`DO.db\` hasn\'t been updated for years\, and a lot of semantic information is \[missing\]\(https\:\/\/github.com\/YuLab\-SMU\/DOSE\/issues\/57\). So we developed the new package \`HPO.db\` for Human Human Phenotype Ontology annotation.


.. conda:package:: bioconductor-hpo.db

   |downloads_bioconductor-hpo.db| |docker_bioconductor-hpo.db|

   :versions:
      
      

      ``0.99.2-0``

      

   
   :depends on bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends on bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends on bioconductor-biocfilecache: ``>=2.10.0,<2.11.0``
   :depends on bioconductor-data-packages: ``>=20231203``
   :depends on curl: 
   :depends on r-base: ``>=4.3,<4.4.0a0``
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

    pixi global install bioconductor-hpo.db

to add into an existing workspace instead, run::

    pixi add bioconductor-hpo.db

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-hpo.db

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-hpo.db

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-hpo.db:<tag>

(see `bioconductor-hpo.db/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-hpo.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hpo.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hpo.db
   :alt:   (downloads)
.. |docker_bioconductor-hpo.db| image:: https://quay.io/repository/biocontainers/bioconductor-hpo.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hpo.db
.. _`bioconductor-hpo.db/tags`: https://quay.io/repository/biocontainers/bioconductor-hpo.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hpo.db";
        var versions = ["0.99.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hpo.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hpo.db/README.html