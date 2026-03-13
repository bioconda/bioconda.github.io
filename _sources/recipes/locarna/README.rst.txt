:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'locarna'
.. highlight: bash

locarna
=======

.. conda:recipe:: locarna
   :replaces_section_title:
   :noindex:

   Multiple alignment of RNAs.

   :homepage: https://github.com/s-will/LocARNA
   :documentation: https://s-will.github.io/LocARNA
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`locarna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/locarna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/locarna/meta.yaml>`_
   :links: biotools: :biotools:`locarna`, usegalaxy-eu: :usegalaxy-eu:`locarna_multiple`, doi: :doi:`10.1371/journal.pcbi.0030065`

   


.. conda:package:: locarna

   |downloads_locarna| |docker_locarna|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.1-2</code>,  <code>2.0.1-1</code>,  <code>2.0.1-0</code>,  <code>2.0.0-5</code>,  <code>2.0.0-3</code>,  <code>2.0.0-2</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>2.0.0RC10-1</code>,  </span></summary>
      

      ``2.0.1-2``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-5``,  ``2.0.0-3``,  ``2.0.0-2``,  ``2.0.0-1``,  ``2.0.0-0``,  ``2.0.0RC10-1``,  ``2.0.0RC10-0``,  ``2.0.0RC8-2``,  ``2.0.0RC8-1``,  ``2.0.0RC8-0``,  ``2.0.0RC6-2``,  ``2.0.0RC6-1``,  ``2.0.0RC6-0``,  ``1.9.2.3-2``,  ``1.9.2.3-1``,  ``1.9.2.3-0``,  ``1.9.2-1``,  ``1.9.2-0``,  ``1.9.1-2``,  ``1.9.1-1``,  ``1.9.1-0``,  ``1.9.0-0``,  ``1.8.12-0``,  ``1.8.11-1``,  ``1.8.10-0``,  ``1.8.9-3``,  ``1.8.9-2``,  ``1.8.9-1``,  ``1.8.7-1``,  ``1.8.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on viennarna: ``>=2.5.1,<3``
   :depends on viennarna: ``>=2.7.0,<2.8.0a0``

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

    pixi global install locarna

to add into an existing workspace instead, run::

    pixi add locarna

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install locarna

Alternatively, to install into a new environment, run::

    conda create -n envname locarna

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/locarna:<tag>

(see `locarna/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_locarna| image:: https://img.shields.io/conda/dn/bioconda/locarna.svg?style=flat
   :target: https://anaconda.org/bioconda/locarna
   :alt:   (downloads)
.. |docker_locarna| image:: https://quay.io/repository/biocontainers/locarna/status
   :target: https://quay.io/repository/biocontainers/locarna
.. _`locarna/tags`: https://quay.io/repository/biocontainers/locarna?tab=tags


.. raw:: html

    <script>
        var package = "locarna";
        var versions = ["2.0.1","2.0.1","2.0.1","2.0.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/locarna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/locarna/README.html