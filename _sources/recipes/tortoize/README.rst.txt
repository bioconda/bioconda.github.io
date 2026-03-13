:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tortoize'
.. highlight: bash

tortoize
========

.. conda:recipe:: tortoize
   :replaces_section_title:
   :noindex:

   Application to calculate ramachandran z\-scores.

   :homepage: https://github.com/PDB-REDO/tortoize
   :documentation: https://github.com/PDB-REDO/tortoize/blob/trunk/doc/tortoize.pdf
   
   :license: BSD / BSD-2-Clause
   :recipe: /`tortoize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tortoize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tortoize/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.str.2020.08.005`

   Tortoize validates protein structure models by checking the Ramachandran plot and side\-chain rotamer
   distributions. Quality Z\-scores are given at the residue level and at the model level \(ramachandran\-z and
   torsions\-z\). Higher scores are better. To compare models or to describe the reliability of the model Z\-scores
   jackknife\- based standard deviations are also reported \(ramachandran\-jackknife\-sd and torsion\-jackknife\-sd\).



.. conda:package:: tortoize

   |downloads_tortoize| |docker_tortoize|

   :versions:
      
      

      ``2.0.16-0``,  ``2.0.15-1``,  ``2.0.15-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on dssp: ``>=4.5.6,<4.6.0a0``
   :depends on libboost: ``>=1.86.0,<1.87.0a0``
   :depends on libcifpp: ``>=8.0.1,<9.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
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

    pixi global install tortoize

to add into an existing workspace instead, run::

    pixi add tortoize

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tortoize

Alternatively, to install into a new environment, run::

    conda create -n envname tortoize

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tortoize:<tag>

(see `tortoize/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tortoize| image:: https://img.shields.io/conda/dn/bioconda/tortoize.svg?style=flat
   :target: https://anaconda.org/bioconda/tortoize
   :alt:   (downloads)
.. |docker_tortoize| image:: https://quay.io/repository/biocontainers/tortoize/status
   :target: https://quay.io/repository/biocontainers/tortoize
.. _`tortoize/tags`: https://quay.io/repository/biocontainers/tortoize?tab=tags


.. raw:: html

    <script>
        var package = "tortoize";
        var versions = ["2.0.16","2.0.15","2.0.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tortoize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tortoize/README.html