:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'primer3'
.. highlight: bash

primer3
=======

.. conda:recipe:: primer3
   :replaces_section_title:
   :noindex:

   Design PCR primers from DNA sequence. From mispriming libraries to sequence quality data to the generation of internal oligos\, primer3 does it.

   :homepage: https://github.com/primer3-org/primer3
   :license: GPLv2
   :recipe: /`primer3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primer3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primer3/meta.yaml>`_
   :links: biotools: :biotools:`primer3`, doi: :doi:`10.1093/nar/gks596`

   


.. conda:package:: primer3

   |downloads_primer3| |docker_primer3|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.6.1-7</code>,  <code>2.6.1-6</code>,  <code>2.6.1-5</code>,  <code>2.6.1-4</code>,  <code>2.6.1-3</code>,  <code>2.6.1-2</code>,  <code>2.6.1-1</code>,  <code>2.6.1-0</code>,  <code>2.6.0-1</code>,  </span></summary>
      

      ``2.6.1-7``,  ``2.6.1-6``,  ``2.6.1-5``,  ``2.6.1-4``,  ``2.6.1-3``,  ``2.6.1-2``,  ``2.6.1-1``,  ``2.6.1-0``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.1a-2``,  ``2.4.1a-1``,  ``2.4.1a-0``,  ``2.4.0-0``,  ``2.3.7-1``,  ``2.3.7-0``,  ``2.0.0a-8``,  ``2.0.0a-7``,  ``2.0.0a-6``,  ``2.0.0a-5``,  ``2.0.0a-4``,  ``2.0.0a-3``,  ``2.0.0a-2``,  ``2.0.0a-1``,  ``2.0.0a-0``,  ``1.1.4-7``,  ``1.1.4-6``,  ``1.1.4-5``,  ``1.1.4-4``,  ``1.1.4-3``,  ``1.1.4-2``,  ``1.1.4-1``,  ``1.1.4-0``,  ``v2.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
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

    pixi global install primer3

to add into an existing workspace instead, run::

    pixi add primer3

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install primer3

Alternatively, to install into a new environment, run::

    conda create -n envname primer3

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/primer3:<tag>

(see `primer3/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_primer3| image:: https://img.shields.io/conda/dn/bioconda/primer3.svg?style=flat
   :target: https://anaconda.org/bioconda/primer3
   :alt:   (downloads)
.. |docker_primer3| image:: https://quay.io/repository/biocontainers/primer3/status
   :target: https://quay.io/repository/biocontainers/primer3
.. _`primer3/tags`: https://quay.io/repository/biocontainers/primer3?tab=tags


.. raw:: html

    <script>
        var package = "primer3";
        var versions = ["2.6.1","2.6.1","2.6.1","2.6.1","2.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/primer3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/primer3/README.html