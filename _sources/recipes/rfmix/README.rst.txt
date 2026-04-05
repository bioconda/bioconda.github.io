:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rfmix'
.. highlight: bash

rfmix
=====

.. conda:recipe:: rfmix
   :replaces_section_title:
   :noindex:

   RFMix implements a fast discriminative approach to modeling ancestry along an admixed chromosome given observed haplotype sequences of known or inferred ancestry.

   :homepage: https://github.com/slowkoni/rfmix
   :license: Free for Academic Use
   :recipe: /`rfmix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rfmix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rfmix/meta.yaml>`_
   :links: biotools: :biotools:`RFMix`, doi: :doi:`10.1016/j.ajhg.2013.06.020`

   


.. conda:package:: rfmix

   |downloads_rfmix| |docker_rfmix|

   :versions:
      
      

      ``2.03.r0.9505bfa-8``,  ``2.03.r0.9505bfa-7``,  ``2.03.r0.9505bfa-6``,  ``2.03.r0.9505bfa-5``,  ``2.03.r0.9505bfa-4``,  ``2.03.r0.9505bfa-3``,  ``2.03.r0.9505bfa-2``,  ``2.03.r0.9505bfa-1``,  ``2.03.r0.9505bfa-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on pthread-stubs: 

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

    pixi global install rfmix

to add into an existing workspace instead, run::

    pixi add rfmix

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rfmix

Alternatively, to install into a new environment, run::

    conda create -n envname rfmix

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rfmix:<tag>

(see `rfmix/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rfmix| image:: https://img.shields.io/conda/dn/bioconda/rfmix.svg?style=flat
   :target: https://anaconda.org/bioconda/rfmix
   :alt:   (downloads)
.. |docker_rfmix| image:: https://quay.io/repository/biocontainers/rfmix/status
   :target: https://quay.io/repository/biocontainers/rfmix
.. _`rfmix/tags`: https://quay.io/repository/biocontainers/rfmix?tab=tags


.. raw:: html

    <script>
        var package = "rfmix";
        var versions = ["2.03.r0.9505bfa","2.03.r0.9505bfa","2.03.r0.9505bfa","2.03.r0.9505bfa","2.03.r0.9505bfa"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rfmix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rfmix/README.html