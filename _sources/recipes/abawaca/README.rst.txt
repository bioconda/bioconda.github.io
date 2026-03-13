:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'abawaca'
.. highlight: bash

abawaca
=======

.. conda:recipe:: abawaca
   :replaces_section_title:
   :noindex:

   abawaca is a binning program for metagenomics.

   :homepage: https://github.com/CK7/abawaca
   :license: Open Source
   :recipe: /`abawaca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abawaca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abawaca/meta.yaml>`_
   :links: doi: :doi:`10.1038/nature14486`

   


.. conda:package:: abawaca

   |downloads_abawaca| |docker_abawaca|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.00-9</code>,  <code>1.00-8</code>,  <code>1.00-7</code>,  <code>1.00-6</code>,  <code>1.00-5</code>,  <code>1.00-4</code>,  <code>1.00-3</code>,  <code>1.00-2</code>,  <code>1.00-1</code>,  </span></summary>
      

      ``1.00-9``,  ``1.00-8``,  ``1.00-7``,  ``1.00-6``,  ``1.00-5``,  ``1.00-4``,  ``1.00-3``,  ``1.00-2``,  ``1.00-1``,  ``1.00-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install abawaca

to add into an existing workspace instead, run::

    pixi add abawaca

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install abawaca

Alternatively, to install into a new environment, run::

    conda create -n envname abawaca

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/abawaca:<tag>

(see `abawaca/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_abawaca| image:: https://img.shields.io/conda/dn/bioconda/abawaca.svg?style=flat
   :target: https://anaconda.org/bioconda/abawaca
   :alt:   (downloads)
.. |docker_abawaca| image:: https://quay.io/repository/biocontainers/abawaca/status
   :target: https://quay.io/repository/biocontainers/abawaca
.. _`abawaca/tags`: https://quay.io/repository/biocontainers/abawaca?tab=tags


.. raw:: html

    <script>
        var package = "abawaca";
        var versions = ["1.00","1.00","1.00","1.00","1.00"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/abawaca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/abawaca/README.html