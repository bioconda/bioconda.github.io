:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'epa-ng'
.. highlight: bash

epa-ng
======

.. conda:recipe:: epa-ng
   :replaces_section_title:
   :noindex:

   Massively parallel phylogenetic placement of genetic sequences

   :homepage: https://github.com/Pbdas/epa-ng
   :license: GNU Affero General Public License v3.0
   :recipe: /`epa-ng <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epa-ng>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epa-ng/meta.yaml>`_
   :links: doi: :doi:`10.1093/sysbio/syy054`

   


.. conda:package:: epa-ng

   |downloads_epa-ng| |docker_epa-ng|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.8-7</code>,  <code>0.3.8-6</code>,  <code>0.3.8-5</code>,  <code>0.3.8-4</code>,  <code>0.3.8-3</code>,  <code>0.3.8-2</code>,  <code>0.3.8-1</code>,  <code>0.3.8-0</code>,  <code>0.3.6-0</code>,  </span></summary>
      

      ``0.3.8-7``,  ``0.3.8-6``,  ``0.3.8-5``,  ``0.3.8-4``,  ``0.3.8-3``,  ``0.3.8-2``,  ``0.3.8-1``,  ``0.3.8-0``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-2``,  ``0.3.4-1``,  ``0.3.4-0``,  ``0.3.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zlib: 

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

    pixi global install epa-ng

to add into an existing workspace instead, run::

    pixi add epa-ng

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install epa-ng

Alternatively, to install into a new environment, run::

    conda create -n envname epa-ng

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/epa-ng:<tag>

(see `epa-ng/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_epa-ng| image:: https://img.shields.io/conda/dn/bioconda/epa-ng.svg?style=flat
   :target: https://anaconda.org/bioconda/epa-ng
   :alt:   (downloads)
.. |docker_epa-ng| image:: https://quay.io/repository/biocontainers/epa-ng/status
   :target: https://quay.io/repository/biocontainers/epa-ng
.. _`epa-ng/tags`: https://quay.io/repository/biocontainers/epa-ng?tab=tags


.. raw:: html

    <script>
        var package = "epa-ng";
        var versions = ["0.3.8","0.3.8","0.3.8","0.3.8","0.3.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/epa-ng/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/epa-ng/README.html