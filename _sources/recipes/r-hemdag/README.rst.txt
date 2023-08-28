:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-hemdag'
.. highlight: bash

r-hemdag
========

.. conda:recipe:: r-hemdag
   :replaces_section_title:
   :noindex:

   a collection of Hierarchical Ensemble Methods \(HEMs\) for Directed Acyclic Graphs \(DAGs\).

   :homepage: https://CRAN.R-project.org/package=HEMDAG
   :documentation: https://hemdag.readthedocs.io
   
   :developer docs: https://github.com/marconotaro/hemdag
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`r-hemdag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-hemdag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-hemdag/meta.yaml>`_

   \[\!\[Documentation Status\]\(https\:\/\/readthedocs.org\/projects\/hemdag\/badge\/\?version\=latest\)\]\(https\:\/\/hemdag.readthedocs.io\/en\/latest\/\?badge\=latest\)

   HEMDAG library\:
   \* implements several Hierarchical Ensemble Methods \(HEMs\) for Directed Acyclic Graphs \(DAGs\)\;
   \* reconciles flat predictions with the topology of the ontology\;
   \* can enhance predictions of virtually any flat learning methods by taking into account the hierarchical relationships between ontology classes\;
   \* provides biologically meaningful predictions that always obey the true\-path\-rule\, the biological and logical rule that governs the internal coherence of biomedical ontologies\;
   \* is specifically designed for exploiting the hierarchical relationships of DAG\-structured taxonomies\, such as the Human Phenotype Ontology \(HPO\) or the Gene Ontology \(GO\)\, but can be safely applied to tree\-structured taxonomies as well \(e.g. FunCat\)\, since trees are DAGs\;
   \* scales nicely both in terms of the complexity of the taxonomy and in the cardinality of the examples\;
   \* provides several utility functions to process and analyze graphs\;
   \* provides several performance metrics to evaluate HEMs algorithms.




.. conda:package:: r-hemdag

   |downloads_r-hemdag| |docker_r-hemdag|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.7.4-6</code>,  <code>2.7.4-5</code>,  <code>2.7.4-4</code>,  <code>2.7.4-3</code>,  <code>2.7.4-2</code>,  <code>2.7.4-1</code>,  <code>2.7.4-0</code>,  <code>2.7.3-2</code>,  <code>2.7.3-0</code>,  </span></summary>
      

      ``2.7.4-6``,  ``2.7.4-5``,  ``2.7.4-4``,  ``2.7.4-3``,  ``2.7.4-2``,  ``2.7.4-1``,  ``2.7.4-0``,  ``2.7.3-2``,  ``2.7.3-0``,  ``2.6.1-1``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.5.9-0``,  ``2.4.8-0``,  ``2.4.7-1``,  ``2.4.7-0``,  ``2.2.5-1``,  ``2.2.5-0``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-graph: 
   :depends bioconductor-preprocesscore: 
   :depends bioconductor-rbgl: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-plyr: 
   :depends r-precrec: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install r-hemdag

   and update with::

      mamba update r-hemdag

  To create a new environment, run::

      mamba create --name myenvname r-hemdag

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-hemdag:<tag>

   (see `r-hemdag/tags`_ for valid values for ``<tag>``)


.. |downloads_r-hemdag| image:: https://img.shields.io/conda/dn/bioconda/r-hemdag.svg?style=flat
   :target: https://anaconda.org/bioconda/r-hemdag
   :alt:   (downloads)
.. |docker_r-hemdag| image:: https://quay.io/repository/biocontainers/r-hemdag/status
   :target: https://quay.io/repository/biocontainers/r-hemdag
.. _`r-hemdag/tags`: https://quay.io/repository/biocontainers/r-hemdag?tab=tags


.. raw:: html

    <script>
        var package = "r-hemdag";
        var versions = ["2.7.4","2.7.4","2.7.4","2.7.4","2.7.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-hemdag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-hemdag/README.html