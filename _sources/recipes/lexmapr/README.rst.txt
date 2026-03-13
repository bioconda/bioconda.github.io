:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lexmapr'
.. highlight: bash

lexmapr
=======

.. conda:recipe:: lexmapr
   :replaces_section_title:
   :noindex:

   A Lexicon and Rule\-Based Tool for Translating Short Biomedical Specimen Descriptions into Semantic Web Ontology Terms

   :homepage: https://github.com/LexMapr/lexmapr
   :license: GPL-3.0
   :recipe: /`lexmapr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lexmapr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lexmapr/meta.yaml>`_

   


.. conda:package:: lexmapr

   |downloads_lexmapr| |docker_lexmapr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.1-1</code>,  <code>0.7.1-0</code>,  <code>0.7.0-0</code>,  <code>0.6.1-1</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.0-0</code>,  </span></summary>
      

      ``0.7.1-1``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on inflection: 
   :depends on nltk: ``3.4.5.*``
   :depends on nltk_data: 
   :depends on python: ``>=3.6,<3.7.0a0 *_cpython``
   :depends on python-dateutil: 
   :depends on python_abi: ``3.6.* *_cp36m``
   :depends on rdflib: 
   :depends on wikipedia: 

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

    pixi global install lexmapr

to add into an existing workspace instead, run::

    pixi add lexmapr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install lexmapr

Alternatively, to install into a new environment, run::

    conda create -n envname lexmapr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/lexmapr:<tag>

(see `lexmapr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_lexmapr| image:: https://img.shields.io/conda/dn/bioconda/lexmapr.svg?style=flat
   :target: https://anaconda.org/bioconda/lexmapr
   :alt:   (downloads)
.. |docker_lexmapr| image:: https://quay.io/repository/biocontainers/lexmapr/status
   :target: https://quay.io/repository/biocontainers/lexmapr
.. _`lexmapr/tags`: https://quay.io/repository/biocontainers/lexmapr?tab=tags


.. raw:: html

    <script>
        var package = "lexmapr";
        var versions = ["0.7.1","0.7.1","0.7.0","0.6.1","0.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lexmapr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lexmapr/README.html