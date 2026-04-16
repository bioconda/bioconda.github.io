:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mykrobe'
.. highlight: bash

mykrobe
=======

.. conda:recipe:: mykrobe
   :replaces_section_title:
   :noindex:

   Antibiotic resistance prediction in minutes.

   :homepage: https://github.com/Mykrobe-tools/mykrobe
   :documentation: https://github.com/Mykrobe-tools/mykrobe/wiki
   
   :license: MIT / MIT
   :recipe: /`mykrobe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mykrobe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mykrobe/meta.yaml>`_
   :links: doi: :doi:`10.12688/wellcomeopenres.15603.1`, biotools: :biotools:`Mykrobe`

   Rapid antibiotic\-resistance predictions from genome sequence data for Staphylococcus aureus and Mycobacterium tuberculosis.


.. conda:package:: mykrobe

   |downloads_mykrobe| |docker_mykrobe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.13.0-5</code>,  <code>0.13.0-4</code>,  <code>0.13.0-3</code>,  <code>0.13.0-2</code>,  <code>0.13.0-1</code>,  <code>0.13.0-0</code>,  <code>0.12.2-1</code>,  <code>0.12.2-0</code>,  <code>0.12.1-2</code>,  </span></summary>
      

      ``0.13.0-5``,  ``0.13.0-4``,  ``0.13.0-3``,  ``0.13.0-2``,  ``0.13.0-1``,  ``0.13.0-0``,  ``0.12.2-1``,  ``0.12.2-0``,  ``0.12.1-2``,  ``0.12.1-1``,  ``0.12.1-0``,  ``0.12.0-0``,  ``0.11.0-1``,  ``0.11.0-0``,  ``0.10.0-1``,  ``0.10.0-0``,  ``0.9.0-3``,  ``0.9.0-2``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.2-1``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-1``,  ``0.8.0-0``,  ``0.7.0-5``,  ``0.7.0-4``,  ``0.7.0-3``,  ``0.7.0-2``,  ``0.7.0-0``,  ``0.6.1-3``,  ``0.6.1-2``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.5.6-1``,  ``0.5.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on anytree: 
   :depends on biopython: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on mongodb: 
   :depends on mongoengine: ``>=0.24.1``
   :depends on numpy: ``>=1.22.4,<2.0a0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on pyvcf3: ``>=1.0.3``
   :depends on pyvcf3: ``>=1.0.4,<2.0a0``
   :depends on requests: 
   :depends on setuptools: 

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

    pixi global install mykrobe

to add into an existing workspace instead, run::

    pixi add mykrobe

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mykrobe

Alternatively, to install into a new environment, run::

    conda create -n envname mykrobe

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mykrobe:<tag>

(see `mykrobe/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mykrobe| image:: https://img.shields.io/conda/dn/bioconda/mykrobe.svg?style=flat
   :target: https://anaconda.org/bioconda/mykrobe
   :alt:   (downloads)
.. |docker_mykrobe| image:: https://quay.io/repository/biocontainers/mykrobe/status
   :target: https://quay.io/repository/biocontainers/mykrobe
.. _`mykrobe/tags`: https://quay.io/repository/biocontainers/mykrobe?tab=tags


.. raw:: html

    <script>
        var package = "mykrobe";
        var versions = ["0.13.0","0.13.0","0.13.0","0.13.0","0.13.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mykrobe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mykrobe/README.html