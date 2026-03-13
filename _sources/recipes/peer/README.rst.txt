:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'peer'
.. highlight: bash

peer
====

.. conda:recipe:: peer
   :replaces_section_title:
   :noindex:

   A collection of Bayesian approaches to infer hidden determinants and their effects from gene expression profiles using factor analysis methods

   :homepage: https://github.com/PMBio/peer
   :license: GPL-2.0-or-later
   :recipe: /`peer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peer/meta.yaml>`_

   


.. conda:package:: peer

   |downloads_peer| |docker_peer|

   :versions:
      
      

      ``1.3-1``,  ``1.3-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

   :additional platforms:
      

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

    pixi global install peer

to add into an existing workspace instead, run::

    pixi add peer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install peer

Alternatively, to install into a new environment, run::

    conda create -n envname peer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/peer:<tag>

(see `peer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_peer| image:: https://img.shields.io/conda/dn/bioconda/peer.svg?style=flat
   :target: https://anaconda.org/bioconda/peer
   :alt:   (downloads)
.. |docker_peer| image:: https://quay.io/repository/biocontainers/peer/status
   :target: https://quay.io/repository/biocontainers/peer
.. _`peer/tags`: https://quay.io/repository/biocontainers/peer?tab=tags


.. raw:: html

    <script>
        var package = "peer";
        var versions = ["1.3","1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/peer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/peer/README.html