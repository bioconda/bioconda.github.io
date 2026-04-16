:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'discosnp'
.. highlight: bash

discosnp
========

.. conda:recipe:: discosnp
   :replaces_section_title:
   :noindex:

   Reference\-free small variant caller for short read sequencing data.

   :homepage: https://github.com/GATB/DiscoSnp
   :documentation: https://gatb.inria.fr/software/discosnp
   
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`discosnp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/discosnp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/discosnp/meta.yaml>`_
   :links: biotools: :biotools:`discosnp`, doi: :doi:`10.1093/nar/gkn000`

   


.. conda:package:: discosnp

   |downloads_discosnp| |docker_discosnp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.6.2-6</code>,  <code>2.6.2-5</code>,  <code>2.6.2-4</code>,  <code>2.6.2-3</code>,  <code>2.6.2-2</code>,  <code>2.6.2-1</code>,  <code>2.6.2-0</code>,  <code>2.6.1-0</code>,  <code>2.5.4-1</code>,  </span></summary>
      

      ``2.6.2-6``,  ``2.6.2-5``,  ``2.6.2-4``,  ``2.6.2-3``,  ``2.6.2-2``,  ``2.6.2-1``,  ``2.6.2-0``,  ``2.6.1-0``,  ``2.5.4-1``,  ``2.5.4-0``,  ``2.4.4-0``,  ``2.4.3-2``,  ``2.4.3-1``,  ``2.4.3-0``,  ``2.3.0-7``,  ``2.3.0-6``,  ``2.3.0-5``,  ``2.3.0-4``,  ``2.3.0-3``,  ``2.3.0-2``,  ``2.3.0-1``,  ``2.3.0-0``,  ``2.2.10-1``,  ``2.2.10-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bwa: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on python: ``>=3.0``
   :depends on short-read-connector: 

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

    pixi global install discosnp

to add into an existing workspace instead, run::

    pixi add discosnp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install discosnp

Alternatively, to install into a new environment, run::

    conda create -n envname discosnp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/discosnp:<tag>

(see `discosnp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_discosnp| image:: https://img.shields.io/conda/dn/bioconda/discosnp.svg?style=flat
   :target: https://anaconda.org/bioconda/discosnp
   :alt:   (downloads)
.. |docker_discosnp| image:: https://quay.io/repository/biocontainers/discosnp/status
   :target: https://quay.io/repository/biocontainers/discosnp
.. _`discosnp/tags`: https://quay.io/repository/biocontainers/discosnp?tab=tags


.. raw:: html

    <script>
        var package = "discosnp";
        var versions = ["2.6.2","2.6.2","2.6.2","2.6.2","2.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/discosnp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/discosnp/README.html