:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'entrez-direct'
.. highlight: bash

entrez-direct
=============

.. conda:recipe:: entrez-direct
   :replaces_section_title:
   :noindex:

   Entrez Direct \(EDirect\) is an advanced method for accessing the NCBI\'s set of interconnected databases \(publication\, sequence\, structure\, gene\, variation\, expression\, etc.\) from a UNIX terminal window. Functions take search terms from command\-line arguments. Individual operations are combined to build multi\-step queries. Record retrieval and formatting normally complete the process.

   :homepage: https://ftp.ncbi.nlm.nih.gov/entrez/entrezdirect/versions/24.0.20250527/README
   :license: Public Domain
   :recipe: /`entrez-direct <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/entrez-direct>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/entrez-direct/meta.yaml>`_
   :links: biotools: :biotools:`entrez`

   


.. conda:package:: entrez-direct

   |downloads_entrez-direct| |docker_entrez-direct|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>24.0-0</code>,  <code>22.4-0</code>,  <code>22.1-0</code>,  <code>21.6-0</code>,  <code>16.2-1</code>,  <code>16.2-0</code>,  <code>15.6-1</code>,  <code>15.6-0</code>,  <code>13.9-2</code>,  </span></summary>
      

      ``24.0-0``,  ``22.4-0``,  ``22.1-0``,  ``21.6-0``,  ``16.2-1``,  ``16.2-0``,  ``15.6-1``,  ``15.6-0``,  ``13.9-2``,  ``13.9-1``,  ``13.9-0``,  ``13.8-0``,  ``13.3-0``,  ``11.0-2``,  ``11.0-1``,  ``11.0-0``,  ``10.2-0``,  ``10.0-0``,  ``7.70-2``,  ``7.70-1``,  ``7.70-0``,  ``7.00-1``,  ``7.00-0``,  ``5.80-0``,  ``4.00-1``,  ``4.00-0``

      
      .. raw:: html

         </details>
      

   
   :depends on wget: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install entrez-direct

to add into an existing workspace instead, run::

    pixi add entrez-direct

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install entrez-direct

Alternatively, to install into a new environment, run::

    conda create -n envname entrez-direct

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/entrez-direct:<tag>

(see `entrez-direct/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_entrez-direct| image:: https://img.shields.io/conda/dn/bioconda/entrez-direct.svg?style=flat
   :target: https://anaconda.org/bioconda/entrez-direct
   :alt:   (downloads)
.. |docker_entrez-direct| image:: https://quay.io/repository/biocontainers/entrez-direct/status
   :target: https://quay.io/repository/biocontainers/entrez-direct
.. _`entrez-direct/tags`: https://quay.io/repository/biocontainers/entrez-direct?tab=tags


.. raw:: html

    <script>
        var package = "entrez-direct";
        var versions = ["24.0","22.4","22.1","21.6","16.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/entrez-direct/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/entrez-direct/README.html