:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'krona'
.. highlight: bash

krona
=====

.. conda:recipe:: krona
   :replaces_section_title:
   :noindex:

   Krona Tools is a set of scripts to create Krona charts from several Bioinformatics tools as well as from text and XML files.

   :homepage: https://github.com/marbl/Krona
   :license: BSD
   :recipe: /`krona <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krona>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krona/meta.yaml>`_
   :links: biotools: :biotools:`krona`

   


.. conda:package:: krona

   |downloads_krona| |docker_krona|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.8.1-1</code>,  <code>2.8.1-0</code>,  <code>2.8-2</code>,  <code>2.8-1</code>,  <code>2.8-0</code>,  <code>2.7.1-7</code>,  <code>2.7.1-6</code>,  <code>2.7.1-5</code>,  <code>2.7.1-4</code>,  </span></summary>
      

      ``2.8.1-1``,  ``2.8.1-0``,  ``2.8-2``,  ``2.8-1``,  ``2.8-0``,  ``2.7.1-7``,  ``2.7.1-6``,  ``2.7.1-5``,  ``2.7.1-4``,  ``2.7.1-3``,  ``2.7.1-2``,  ``2.7.1-1``,  ``2.7.1-0``,  ``2.7-3``,  ``2.7-2``,  ``2.7-1``,  ``2.7-0``,  ``2.6.1-2``,  ``2.6.1-1``,  ``2.6-5``,  ``2.6-4``,  ``2.6-3``,  ``2.6-2``,  ``2.6-1``,  ``2.6-0``,  ``2.5-5``,  ``2.5-4``,  ``2.5-3``,  ``2.5-2``,  ``2.5-1``,  ``2.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on curl: 
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``

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

    pixi global install krona

to add into an existing workspace instead, run::

    pixi add krona

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install krona

Alternatively, to install into a new environment, run::

    conda create -n envname krona

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/krona:<tag>

(see `krona/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_krona| image:: https://img.shields.io/conda/dn/bioconda/krona.svg?style=flat
   :target: https://anaconda.org/bioconda/krona
   :alt:   (downloads)
.. |docker_krona| image:: https://quay.io/repository/biocontainers/krona/status
   :target: https://quay.io/repository/biocontainers/krona
.. _`krona/tags`: https://quay.io/repository/biocontainers/krona?tab=tags


.. raw:: html

    <script>
        var package = "krona";
        var versions = ["2.8.1","2.8.1","2.8","2.8","2.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/krona/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/krona/README.html