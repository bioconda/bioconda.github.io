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

         <details><summary><span class="truncated-version-list"><code>2.7.4-8</code>,  <code>2.7.4-7</code>,  <code>2.7.4-6</code>,  <code>2.7.4-5</code>,  <code>2.7.4-4</code>,  <code>2.7.4-3</code>,  <code>2.7.4-2</code>,  <code>2.7.4-1</code>,  <code>2.7.4-0</code>,  </span></summary>
      

      ``2.7.4-8``,  ``2.7.4-7``,  ``2.7.4-6``,  ``2.7.4-5``,  ``2.7.4-4``,  ``2.7.4-3``,  ``2.7.4-2``,  ``2.7.4-1``,  ``2.7.4-0``,  ``2.7.3-2``,  ``2.7.3-0``,  ``2.6.1-1``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.5.9-0``,  ``2.4.8-0``,  ``2.4.7-1``,  ``2.4.7-0``,  ``2.2.5-1``,  ``2.2.5-0``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-graph: ``>=1.84.0,<1.85.0a0``
   :depends on bioconductor-preprocesscore: ``>=1.68.0,<1.69.0a0``
   :depends on bioconductor-rbgl: ``>=1.82.0,<1.83.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-doparallel: 
   :depends on r-foreach: 
   :depends on r-plyr: 
   :depends on r-precrec: 

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

    pixi global install r-hemdag

to add into an existing workspace instead, run::

    pixi add r-hemdag

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-hemdag

Alternatively, to install into a new environment, run::

    conda create -n envname r-hemdag

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-hemdag:<tag>

(see `r-hemdag/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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