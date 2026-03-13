:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trnascan-se'
.. highlight: bash

trnascan-se
===========

.. conda:recipe:: trnascan-se
   :replaces_section_title:
   :noindex:

   tRNA detection in large\-scale genomic sequences

   :homepage: https://lowelab.ucsc.edu/tRNAscan-SE/
   :documentation: https://lowelab.ucsc.edu/tRNAscan-SE/help.html
   
   :developer docs: https://github.com/UCSC-LoweLab/tRNAscan-SE
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`trnascan-se <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trnascan-se>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trnascan-se/meta.yaml>`_
   :links: biotools: :biotools:`trnascan-se`, doi: :doi:`10.1093/nar/gkab688`

   


.. conda:package:: trnascan-se

   |downloads_trnascan-se| |docker_trnascan-se|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.12-2</code>,  <code>2.0.12-1</code>,  <code>2.0.12-0</code>,  <code>2.0.11-1</code>,  <code>2.0.11-0</code>,  <code>2.0.9-3</code>,  <code>2.0.9-2</code>,  <code>2.0.9-1</code>,  <code>2.0.9-0</code>,  </span></summary>
      

      ``2.0.12-2``,  ``2.0.12-1``,  ``2.0.12-0``,  ``2.0.11-1``,  ``2.0.11-0``,  ``2.0.9-3``,  ``2.0.9-2``,  ``2.0.9-1``,  ``2.0.9-0``,  ``2.0.7-1``,  ``2.0.7-0``,  ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.3-0``,  ``2.0-1``,  ``2.0-0``,  ``1.3.1-10``,  ``1.3.1-9``,  ``1.3.1-8``,  ``1.3.1-7``,  ``1.3.1-6``,  ``1.3.1-5``,  ``1.3.1-4``,  ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends on infernal: ``>=1.1.4``
   :depends on libgcc: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``

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

    pixi global install trnascan-se

to add into an existing workspace instead, run::

    pixi add trnascan-se

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install trnascan-se

Alternatively, to install into a new environment, run::

    conda create -n envname trnascan-se

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/trnascan-se:<tag>

(see `trnascan-se/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_trnascan-se| image:: https://img.shields.io/conda/dn/bioconda/trnascan-se.svg?style=flat
   :target: https://anaconda.org/bioconda/trnascan-se
   :alt:   (downloads)
.. |docker_trnascan-se| image:: https://quay.io/repository/biocontainers/trnascan-se/status
   :target: https://quay.io/repository/biocontainers/trnascan-se
.. _`trnascan-se/tags`: https://quay.io/repository/biocontainers/trnascan-se?tab=tags


.. raw:: html

    <script>
        var package = "trnascan-se";
        var versions = ["2.0.12","2.0.12","2.0.12","2.0.11","2.0.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trnascan-se/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trnascan-se/README.html