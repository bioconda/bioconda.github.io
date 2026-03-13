:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bgreat'
.. highlight: bash

bgreat
======

.. conda:recipe:: bgreat
   :replaces_section_title:
   :noindex:

   BGREAT2 is a read mapping tool for NGS sequencing data that align reads on a de Bruijn graph. Preliminary version described at https\:\/\/bmcbioinformatics.biomedcentral.com\/articles\/10.1186\/s12859\-016\-1103\-9 and used in Bcool a short read corrector \(https\:\/\/arxiv.org\/abs\/1711.03336\)

   :homepage: https://github.com/Malfoy/BGREAT2
   :license: AGPL-3.0
   :recipe: /`bgreat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bgreat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bgreat/meta.yaml>`_

   


.. conda:package:: bgreat

   |downloads_bgreat| |docker_bgreat|

   :versions:
      
      

      ``2.0.0-8``,  ``2.0.0-7``,  ``2.0.0-6``,  ``2.0.0-5``,  ``2.0.0-4``,  ``2.0.0-3``,  ``2.0.0-2``,  ``2.0.0-1``,  ``2.0.0-0``

      

   
   :depends on libgcc: 
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx: 
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install bgreat

to add into an existing workspace instead, run::

    pixi add bgreat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bgreat

Alternatively, to install into a new environment, run::

    conda create -n envname bgreat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bgreat:<tag>

(see `bgreat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bgreat| image:: https://img.shields.io/conda/dn/bioconda/bgreat.svg?style=flat
   :target: https://anaconda.org/bioconda/bgreat
   :alt:   (downloads)
.. |docker_bgreat| image:: https://quay.io/repository/biocontainers/bgreat/status
   :target: https://quay.io/repository/biocontainers/bgreat
.. _`bgreat/tags`: https://quay.io/repository/biocontainers/bgreat?tab=tags


.. raw:: html

    <script>
        var package = "bgreat";
        var versions = ["2.0.0","2.0.0","2.0.0","2.0.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bgreat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bgreat/README.html