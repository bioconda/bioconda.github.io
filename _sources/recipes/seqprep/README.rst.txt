:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqprep'
.. highlight: bash

seqprep
=======

.. conda:recipe:: seqprep
   :replaces_section_title:
   :noindex:

   Tool for stripping adaptors and\/or merging paired reads with overlap into single reads.

   :homepage: https://github.com/jstjohn/SeqPrep
   :documentation: https://github.com/jstjohn/SeqPrep/blob/v1.3.2/README.md
   
   :license: MIT / MIT
   :recipe: /`seqprep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqprep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqprep/meta.yaml>`_
   :links: biotools: :biotools:`seqprep`, usegalaxy-eu: :usegalaxy-eu:`seqprep`, doi: :doi:`10.1134/S1021443716020175`

   


.. conda:package:: seqprep

   |downloads_seqprep| |docker_seqprep|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.2-10</code>,  <code>1.3.2-9</code>,  <code>1.3.2-8</code>,  <code>1.3.2-7</code>,  <code>1.3.2-6</code>,  <code>1.3.2-5</code>,  <code>1.3.2-4</code>,  <code>1.3.2-3</code>,  <code>1.3.2-2</code>,  </span></summary>
      

      ``1.3.2-10``,  ``1.3.2-9``,  ``1.3.2-8``,  ``1.3.2-7``,  ``1.3.2-6``,  ``1.3.2-5``,  ``1.3.2-4``,  ``1.3.2-3``,  ``1.3.2-2``,  ``1.2-1``,  ``1.2-0``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install seqprep

to add into an existing workspace instead, run::

    pixi add seqprep

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install seqprep

Alternatively, to install into a new environment, run::

    conda create -n envname seqprep

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/seqprep:<tag>

(see `seqprep/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_seqprep| image:: https://img.shields.io/conda/dn/bioconda/seqprep.svg?style=flat
   :target: https://anaconda.org/bioconda/seqprep
   :alt:   (downloads)
.. |docker_seqprep| image:: https://quay.io/repository/biocontainers/seqprep/status
   :target: https://quay.io/repository/biocontainers/seqprep
.. _`seqprep/tags`: https://quay.io/repository/biocontainers/seqprep?tab=tags


.. raw:: html

    <script>
        var package = "seqprep";
        var versions = ["1.3.2","1.3.2","1.3.2","1.3.2","1.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqprep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqprep/README.html