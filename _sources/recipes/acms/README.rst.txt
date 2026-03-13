:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'acms'
.. highlight: bash

acms
====

.. conda:recipe:: acms
   :replaces_section_title:
   :noindex:

   Ambivalent Covariance Models \(aCMs\) are our prototypic suggestion to extend CMs with more than one consensus structure.

   :homepage: https://bibiserv.cebitec.uni-bielefeld.de/acms
   :license: GPL-3.0-or-later
   :recipe: /`acms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/acms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/acms/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-015-0569-1`, doi: :doi:`10.1093/bioinformatics/btu649`

   


.. conda:package:: acms

   |downloads_acms| |docker_acms|

   :versions:
      
      

      ``1.3.0-2``,  ``1.3.0-1``,  ``1.3.0-0``

      

   
   :depends on bellmans-gapc: ``>=2024.01.12``
   :depends on bellmans-gapc: ``>=2024.1.12``
   :depends on ghc: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``

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

    pixi global install acms

to add into an existing workspace instead, run::

    pixi add acms

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install acms

Alternatively, to install into a new environment, run::

    conda create -n envname acms

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/acms:<tag>

(see `acms/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_acms| image:: https://img.shields.io/conda/dn/bioconda/acms.svg?style=flat
   :target: https://anaconda.org/bioconda/acms
   :alt:   (downloads)
.. |docker_acms| image:: https://quay.io/repository/biocontainers/acms/status
   :target: https://quay.io/repository/biocontainers/acms
.. _`acms/tags`: https://quay.io/repository/biocontainers/acms?tab=tags


.. raw:: html

    <script>
        var package = "acms";
        var versions = ["1.3.0","1.3.0","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/acms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/acms/README.html