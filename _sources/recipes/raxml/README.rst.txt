:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'raxml'
.. highlight: bash

raxml
=====

.. conda:recipe:: raxml
   :replaces_section_title:
   :noindex:

   Phylogenetics \- Randomized Axelerated Maximum Likelihood.

   :homepage: http://sco.h-its.org/exelixis/web/software/raxml/index.html
   :license: GPL
   :recipe: /`raxml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/raxml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/raxml/meta.yaml>`_
   :links: biotools: :biotools:`raxml`, doi: :doi:`10.1093/bioinformatics/btu033`, usegalaxy-eu: :usegalaxy-eu:`raxml`

   


.. conda:package:: raxml

   |downloads_raxml| |docker_raxml|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>8.2.13-3</code>,  <code>8.2.13-2</code>,  <code>8.2.13-1</code>,  <code>8.2.13-0</code>,  <code>8.2.12-6</code>,  <code>8.2.12-5</code>,  <code>8.2.12-4</code>,  <code>8.2.12-3</code>,  <code>8.2.12-2</code>,  </span></summary>
      

      ``8.2.13-3``,  ``8.2.13-2``,  ``8.2.13-1``,  ``8.2.13-0``,  ``8.2.12-6``,  ``8.2.12-5``,  ``8.2.12-4``,  ``8.2.12-3``,  ``8.2.12-2``,  ``8.2.12-1``,  ``8.2.12-0``,  ``8.2.10-1``,  ``8.2.10-0``,  ``8.2.9-8``,  ``8.2.9-7``,  ``8.2.9-6``,  ``8.2.9-5``,  ``8.2.9-4``,  ``8.2.9-3``,  ``8.2.9-2``,  ``8.2.9-1``,  ``8.2.9-0``,  ``8.2.4-8``,  ``8.2.4-7``,  ``8.2.4-6``,  ``8.2.4-5``,  ``8.2.4-4``,  ``8.2.4-3``,  ``8.2.4-2``,  ``8.2.4-1``,  ``8.2.4-0``,  ``7.3.0-1``,  ``7.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``

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

    pixi global install raxml

to add into an existing workspace instead, run::

    pixi add raxml

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install raxml

Alternatively, to install into a new environment, run::

    conda create -n envname raxml

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/raxml:<tag>

(see `raxml/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_raxml| image:: https://img.shields.io/conda/dn/bioconda/raxml.svg?style=flat
   :target: https://anaconda.org/bioconda/raxml
   :alt:   (downloads)
.. |docker_raxml| image:: https://quay.io/repository/biocontainers/raxml/status
   :target: https://quay.io/repository/biocontainers/raxml
.. _`raxml/tags`: https://quay.io/repository/biocontainers/raxml?tab=tags


.. raw:: html

    <script>
        var package = "raxml";
        var versions = ["8.2.13","8.2.13","8.2.13","8.2.13","8.2.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/raxml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/raxml/README.html