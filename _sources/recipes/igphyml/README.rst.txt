:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'igphyml'
.. highlight: bash

igphyml
=======

.. conda:recipe:: igphyml
   :replaces_section_title:
   :noindex:

   IgPhyML is a program designed to build phylogenetic trees and test evolutionary hypotheses regarding B cell affinity maturation.

   :homepage: https://igphyml.readthedocs.io/en/latest/index.html
   :license: GPL2 / GNU GPL version 2
   :recipe: /`igphyml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igphyml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igphyml/meta.yaml>`_

   


.. conda:package:: igphyml

   |downloads_igphyml| |docker_igphyml|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.5-2</code>,  <code>1.1.5-1</code>,  <code>1.1.5-0</code>,  <code>1.1.4-0</code>,  <code>1.1.3-2</code>,  <code>1.1.3-1</code>,  <code>1.1.3-0</code>,  <code>1.1.2-0</code>,  <code>1.1.1-0</code>,  </span></summary>
      

      ``1.1.5-2``,  ``1.1.5-1``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3-2``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-1``,  ``1.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on changeo: ``>=0.4.6``
   :depends on libgcc: ``>=13``
   :depends on r-alakazam: ``>=0.3.0``

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

    pixi global install igphyml

to add into an existing workspace instead, run::

    pixi add igphyml

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install igphyml

Alternatively, to install into a new environment, run::

    conda create -n envname igphyml

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/igphyml:<tag>

(see `igphyml/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_igphyml| image:: https://img.shields.io/conda/dn/bioconda/igphyml.svg?style=flat
   :target: https://anaconda.org/bioconda/igphyml
   :alt:   (downloads)
.. |docker_igphyml| image:: https://quay.io/repository/biocontainers/igphyml/status
   :target: https://quay.io/repository/biocontainers/igphyml
.. _`igphyml/tags`: https://quay.io/repository/biocontainers/igphyml?tab=tags


.. raw:: html

    <script>
        var package = "igphyml";
        var versions = ["1.1.5","1.1.5","1.1.5","1.1.4","1.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/igphyml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/igphyml/README.html