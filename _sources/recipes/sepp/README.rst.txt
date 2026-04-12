:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sepp'
.. highlight: bash

sepp
====

.. conda:recipe:: sepp
   :replaces_section_title:
   :noindex:

   SATe\-enabled phylogenetic placement.

   :homepage: https://github.com/smirarab/sepp
   :documentation: https://github.com/smirarab/sepp/blob/v4.5.6/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`sepp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sepp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sepp/meta.yaml>`_
   :links: biotools: :biotools:`sepp`

   


.. conda:package:: sepp

   |downloads_sepp| |docker_sepp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.5.6-4</code>,  <code>4.5.6-3</code>,  <code>4.5.6-2</code>,  <code>4.5.6-1</code>,  <code>4.5.6-0</code>,  <code>4.5.5-3</code>,  <code>4.5.5-2</code>,  <code>4.5.5-1</code>,  <code>4.5.5-0</code>,  </span></summary>
      

      ``4.5.6-4``,  ``4.5.6-3``,  ``4.5.6-2``,  ``4.5.6-1``,  ``4.5.6-0``,  ``4.5.5-3``,  ``4.5.5-2``,  ``4.5.5-1``,  ``4.5.5-0``,  ``4.5.4-1``,  ``4.5.4-0``,  ``4.5.1-4``,  ``4.5.1-3``,  ``4.5.1-2``,  ``4.5.1-1``,  ``4.5.1-0``,  ``4.4.0-0``,  ``4.3.10-3``,  ``4.3.10-2``,  ``4.3.10-0``,  ``4.3.9-0``,  ``4.3.8-0``,  ``v4.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on dendropy: ``>=5.0.8,<6.0a0``
   :depends on hmmer: ``>=3.4,<3.5.0a0``
   :depends on libgcc: ``>=14``
   :depends on pasta: 
   :depends on pplacer: ``>=1.1.alpha17``
   :depends on python: ``>=3.12,<3.13.0a0``
   :depends on python_abi: ``3.12.* *_cp312``

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

    pixi global install sepp

to add into an existing workspace instead, run::

    pixi add sepp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sepp

Alternatively, to install into a new environment, run::

    conda create -n envname sepp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sepp:<tag>

(see `sepp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sepp| image:: https://img.shields.io/conda/dn/bioconda/sepp.svg?style=flat
   :target: https://anaconda.org/bioconda/sepp
   :alt:   (downloads)
.. |docker_sepp| image:: https://quay.io/repository/biocontainers/sepp/status
   :target: https://quay.io/repository/biocontainers/sepp
.. _`sepp/tags`: https://quay.io/repository/biocontainers/sepp?tab=tags


.. raw:: html

    <script>
        var package = "sepp";
        var versions = ["4.5.6","4.5.6","4.5.6","4.5.6","4.5.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sepp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sepp/README.html