:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-pod-elemental'
.. highlight: bash

perl-pod-elemental
==================

.. conda:recipe:: perl-pod-elemental
   :replaces_section_title:
   :noindex:

   work with nestable Pod elements

   :homepage: https://github.com/rjbs/Pod-Elemental
   :license: perl_5
   :recipe: /`perl-pod-elemental <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-elemental>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-elemental/meta.yaml>`_

   


.. conda:package:: perl-pod-elemental

   |downloads_perl-pod-elemental| |docker_perl-pod-elemental|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.103006-2</code>,  <code>0.103006-1</code>,  <code>0.103006-0</code>,  <code>0.103005-1</code>,  <code>0.103005-0</code>,  <code>0.103004-5</code>,  <code>0.103004-4</code>,  <code>0.103004-3</code>,  <code>0.103004-2</code>,  </span></summary>
      

      ``0.103006-2``,  ``0.103006-1``,  ``0.103006-0``,  ``0.103005-1``,  ``0.103005-0``,  ``0.103004-5``,  ``0.103004-4``,  ``0.103004-3``,  ``0.103004-2``,  ``0.103004-1``,  ``0.103004-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-app-cpanminus: 
   :depends on perl-mixin-linewise: 
   :depends on perl-moose: ``2.2207.*``
   :depends on perl-moosex-types: 
   :depends on perl-pod-eventual: ``0.094003.*``
   :depends on perl-scalar-list-utils: 
   :depends on perl-string-rewriteprefix: 
   :depends on perl-string-truncate: 
   :depends on perl-test-differences: ``0.71.*``

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

    pixi global install perl-pod-elemental

to add into an existing workspace instead, run::

    pixi add perl-pod-elemental

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-pod-elemental

Alternatively, to install into a new environment, run::

    conda create -n envname perl-pod-elemental

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-pod-elemental:<tag>

(see `perl-pod-elemental/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-pod-elemental| image:: https://img.shields.io/conda/dn/bioconda/perl-pod-elemental.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-pod-elemental
   :alt:   (downloads)
.. |docker_perl-pod-elemental| image:: https://quay.io/repository/biocontainers/perl-pod-elemental/status
   :target: https://quay.io/repository/biocontainers/perl-pod-elemental
.. _`perl-pod-elemental/tags`: https://quay.io/repository/biocontainers/perl-pod-elemental?tab=tags


.. raw:: html

    <script>
        var package = "perl-pod-elemental";
        var versions = ["0.103006","0.103006","0.103006","0.103005","0.103005"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pod-elemental/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pod-elemental/README.html